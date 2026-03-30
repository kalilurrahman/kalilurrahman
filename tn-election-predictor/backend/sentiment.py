from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import re

class SentimentEngine:
    def __init__(self):
        # We use VADER for fast and nuanced English sentiment detection.
        self.analyzer = SentimentIntensityAnalyzer()
        
        # Simple Tamil Political Lexicon for lightweight sentiment detection.
        # This identifies common 'positive' and 'negative' terms in Tamil.
        self.tamil_lexicon = {
            "வெற்றி": 0.8,    # Victory
            "சிறப்பு": 0.5,    # Special / Great
            "வளர்ச்சி": 0.6,   # Development
            "ஆதரவு": 0.4,     # Support
            "நன்மை": 0.5,     # Good
            "மகிழ்ச்சி": 0.7, # Happy
            "முன்னேற்றம்": 0.6, # Progress
            
            "தோல்வி": -0.8,   # Failure
            "ஊழல்": -0.7,     # Corruption
            "எதிர்ப்பு": -0.5, # Opposition
            "குற்றம்": -0.6,   # Accusation
            "மோசம்": -0.5,     # Bad
            "பின்னடைவு": -0.6, # Setback
            "ஏமாற்றம்": -0.7,   # Disappointment
        }

    def analyze_text(self, text: str) -> float:
        """
        Analyze a mixed Tamil/English headline and return a score from -1 to +1.
        """
        if not text:
            return 0.0

        # Calculate English score with VADER
        vader_scores = self.analyzer.polarity_scores(text)
        english_score = vader_scores['compound']

        # Calculate Tamil score using local lexicon
        tamil_score = 0.0
        tamil_hits = 0
        
        for term, value in self.tamil_lexicon.items():
            if term in text:
                tamil_score += value
                tamil_hits += 1
        
        if tamil_hits > 0:
            # Normalize Tamil score
            tamil_score = tamil_score / tamil_hits
            # Blend both scores (Weighted average)
            # We assume most news headlines are English or mixed.
            return (english_score * 0.6) + (tamil_score * 0.4)
        
        return english_score

    def get_sentiment_label(self, score: float) -> str:
        """
        Convert numeric score to a human-readable label.
        """
        if score >= 0.05:
            return "POSITIVE"
        elif score <= -0.05:
            return "NEGATIVE"
        else:
            return "NEUTRAL"

if __name__ == "__main__":
    # Test cases
    engine = SentimentEngine()
    print(f"English: {engine.analyze_text('Great victory for the alliance in Chennai')}")
    print(f"Tamil: {engine.analyze_text('தேர்தலில் மிகப்பெரிய வெற்றி')}")
    print(f"Mixed: {engine.analyze_text('Huge ஊழல் accusation against the candidate')}")
