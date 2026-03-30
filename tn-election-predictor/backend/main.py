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

# --- Serve Static Files (React Build) ---
dist_path = os.path.join(os.getcwd(), "dist")

if os.path.exists(dist_path):
    app.mount("/", StaticFiles(directory=dist_path, html=True), name="static")

    @app.exception_handler(404)
    async def not_found_handler(request, exc):
        if not request.url.path.startswith("/api"):
            return FileResponse(os.path.join(dist_path, "index.html"))
        raise exc
else:
    @app.get("/")
    async def root():
        return {"message": "Frontend build (dist/) not found. Run 'npm run build' first."}

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
