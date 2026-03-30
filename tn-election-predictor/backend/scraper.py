import requests
from typing import List, Dict
from datetime import datetime
import re

# We'll use a simple RSS-based scraper for Google News to avoid API keys and limits.
# In a production environment, use a paid News API for stability.

class NewsScraper:
    def __init__(self):
        self.base_url = "https://news.google.com/rss/search"

    def get_constituency_news(self, name: str, district: str) -> List[Dict]:
        """
        Fetches the latest news for a given constituency.
        """
        # Optimized search query for TN elections
        query = f'"{name} constituency" OR "{name} election" OR "{name} Tamil Nadu"'
        params = {
            "q": query,
            "hl": "en-IN",
            "gl": "IN",
            "ceid": "IN:en"
        }

        try:
            # We use a User-Agent to avoid being blocked.
            headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
            response = requests.get(self.base_url, params=params, headers=headers)
            response.raise_for_status()
            
            # Simple XML parsing (since we're avoiding heavy XML libraries if possible)
            # Find items in the RSS feed
            items = re.findall(r'<item>(.*?)</item>', response.text, re.DOTALL)
            
            news_results = []
            for item in items[:10]: # Limit to top 10 articles
                title = re.search(r'<title>(.*?)</title>', item)
                link = re.search(r'<link>(.*?)</link>', item)
                pub_date = re.search(r'<pubDate>(.*?)</pubDate>', item)
                source = re.search(r'<source.*?>(.*?)</source>', item)
                
                if title and link:
                    news_results.append({
                        "title": title.group(1),
                        "link": link.group(1),
                        "published": pub_date.group(1) if pub_date else datetime.now().strftime("%a, %d %b %Y %H:%M:%S GMT"),
                        "source": source.group(1) if source else "News"
                    })
            
            # If no news found specifically for the constituency, search for district news
            if not news_results:
                return self.get_district_news(district)
                
            return news_results

        except Exception as e:
            print(f"Scraper Error for {name}: {e}")
            return []

    def get_district_news(self, district: str) -> List[Dict]:
        """
        Fallback to search for district-level news.
        """
        query = f'"{district} election" Tamil Nadu'
        params = {
            "q": query,
            "hl": "en-IN",
            "gl": "IN",
            "ceid": "IN:en"
        }
        try:
            # Similar logic as above...
            headers = {"User-Agent": "Mozilla/5.0"}
            response = requests.get(self.base_url, params=params, headers=headers)
            items = re.findall(r'<item>(.*?)</item>', response.text, re.DOTALL)
            
            results = []
            for item in items[:5]:
                title = re.search(r'<title>(.*?)</title>', item)
                link = re.search(r'<link>(.*?)</link>', item)
                if title and link:
                    results.append({
                        "title": title.group(1),
                        "link": link.group(1),
                        "published": "Recent",
                        "source": "District Wide"
                    })
            return results
        except:
            return []

if __name__ == "__main__":
    # Quick test
    scraper = NewsScraper()
    print(scraper.get_constituency_news("Kolathur", "Chennai"))
