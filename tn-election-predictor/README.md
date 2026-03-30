---
title: TN Election Predictor 2026
emoji: 🗳️
colorFrom: red
colorTo: green
sdk: docker
app_port: 8000
pinned: false
---

# TN Election Predictor 2026

An AI-powered psephology dashboard for the 2026 Tamil Nadu Legislative Assembly elections. 

## Features
- **Interactive Battleground Map**: Real 234-constituency boundaries with live prediction coloring.
- **State Assembly Projection**: Real-time seat share tracking with "Magic Number" (118) indicator.
- **Momentum Trajectory**: 90-day trend analytics based on opinion polls and sentiment.
- **Local Resonance Index**: Tracking key issues like welfare, unemployment, and infrastructure.
- **Hugging Face Ready**: Built-in FastAPI backend for serving the React app and future ML models.

## Local Development

### Prerequisites
- Node.js (v20+)
- Python (3.11+)

### Setup
1. Install frontend dependencies:
   ```bash
   npm install
   ```
2. Install backend dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment (Hugging Face Spaces)

This project is configured as a **Docker Space**. To deploy:

1. Create a new Space on [Hugging Face](https://huggingface.co/new-space).
2. Select **Docker** as the SDK.
3. Push this repository to your Space:
   ```bash
   git remote add hf https://huggingface.co/spaces/YOUR_USERNAME/YOUR_SPACE_NAME
   git push hf main
   ```

The Space will automatically build using the `Dockerfile` and serve the app on port 8000.
