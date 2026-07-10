import os
from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import List, Optional, Dict
from datetime import datetime, timedelta

# Import our custom logic
from backend.scraper import NewsScraper
from backend.sentiment import SentimentEngine

app = FastAPI(title="TN Election Predictor API")

scraper = NewsScraper()
sentiment_engine = SentimentEngine()

# --- Simple In-Memory Cache ---
# In a real app, use Redis. For HF CPU Spaces, this is fine.
cache: Dict[str, Dict] = {}
CACHE_TTL = timedelta(hours=1)

def get_cached_result(key: str):
    if key in cache:
        entry = cache[key]
        if datetime.now() - entry["timestamp"] < CACHE_TTL:
            return entry["data"]
    return None

def set_cached_result(key: str, data: any):
    cache[key] = {
        "data": data,
        "timestamp": datetime.now()
    }

# --- API Data Models ---
class SentimentRequest(BaseModel):
    text: str

class NewsItem(BaseModel):
    title: str
    link: str
    published: str
    source: str
    sentiment_score: float
    sentiment_label: str

# --- Endpoints ---

@app.get("/api/health")
async def health_check():
    return {"status": "ok", "version": "1.0.1"}

@app.get("/api/news/{constituency_name}/{district_name}")
async def get_news(constituency_name: str, district_name: str):
    """
    Fetches news for a constituency and attaches sentiment analysis to each item.
    """
    cache_key = f"news_{constituency_name}"
    cached = get_cached_result(cache_key)
    if cached:
        return cached

    news_items = scraper.get_constituency_news(constituency_name, district_name)
    
    # Process each news item for sentiment
    processed_news = []
    total_sentiment = 0.0
    
    for item in news_items:
        score = sentiment_engine.analyze_text(item["title"])
        label = sentiment_engine.get_sentiment_label(score)
        
        processed_news.append({
            **item,
            "sentiment_score": round(score, 2),
            "sentiment_label": label
        })
        total_sentiment += score
    
    avg_sentiment = total_sentiment / len(processed_news) if processed_news else 0.0
    
    result = {
        "constituency": constituency_name,
        "district": district_name,
        "news": processed_news,
        "average_sentiment": round(avg_sentiment, 2),
        "overall_label": sentiment_engine.get_sentiment_label(avg_sentiment),
        "last_updated": datetime.now().isoformat()
    }
    
    set_cached_result(cache_key, result)
    return result

@app.get("/api/constituencies")
async def get_constituencies():
    """
    Serves the full 234-constituency data model for frontend hydration.
    """
    # Serve from public/dist (Vite copies public content to dist root)
    # Check dist first, then public for local dev
    targets = [
        os.path.join(os.getcwd(), "dist", "constituencies.json"),
        os.path.join(os.getcwd(), "public", "constituencies.json")
    ]
    
    for target in targets:
        if os.path.exists(target):
            return FileResponse(target)
            
    raise HTTPException(status_code=404, detail="Constituency data not found. Run data export first.")

# --- Serve Static Files (React Build) ---
dist_path = os.path.join(os.getcwd(), "dist")

# Ensure dist exists
if os.path.exists(dist_path):
    # Support for internal assets (js, css, images)
    # We mount /assets first to ensure it's prioritized for static assets
    assets_path = os.path.join(dist_path, "assets")
    if os.path.exists(assets_path):
        app.mount("/assets", StaticFiles(directory=assets_path), name="assets")

    # Mount remaining root-level files (favicon, etc)
    app.mount("/static", StaticFiles(directory=dist_path), name="root_static")

# --- Serve Static Files (React Build) ---
# Use absolute path based on this file's location
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
dist_path = os.path.join(base_dir, "dist")

# Ensure dist exists
if os.path.exists(dist_path):
    # Support for internal assets (js, css, images)
    # We mount /assets first to ensure it's prioritized for static assets
    assets_path = os.path.join(dist_path, "assets")
    if os.path.exists(assets_path):
        app.mount("/assets", StaticFiles(directory=assets_path), name="assets")

    # Serve data assets explicitly
    @app.get("/tn_assembly.geojson")
    async def serve_geojson():
        return FileResponse(os.path.join(dist_path, "tn_assembly.geojson"))

    @app.get("/constituencies.json")
    async def serve_constituencies_json():
        return FileResponse(os.path.join(dist_path, "constituencies.json"))

    @app.get("/{full_path:path}")
    async def serve_spa(full_path: str):
        # Prevent path traversal: resolve requested path and ensure it stays within dist_path
        dist_real = os.path.realpath(dist_path)
        requested = os.path.realpath(os.path.join(dist_real, full_path))
        if requested == dist_real or requested.startswith(dist_real + os.sep):
            if os.path.isfile(requested):
                return FileResponse(requested)
        # Fallback to SPA root for unknown / unsafe paths
        return FileResponse(os.path.join(dist_real, "index.html"))
else:
    @app.get("/")
    async def root():
        return {"message": f"Frontend build (dist/) not found at {dist_path}. Run 'npm run build' first."}

if __name__ == "__main__":
    import uvicorn
    # Default port for Hugging Face Spaces is 7860
    port = int(os.environ.get("PORT", 7860))
    uvicorn.run(app, host="0.0.0.0", port=port)
