# Local Deployment Script for TN Election Predictor 2026
# This script starts the final production build using the FastAPI backend.

Write-Host "--- TN Election Predictor 2026: Local Excellence Build ---" -ForegroundColor Cyan

# 1. Check if dist exists
if (-not (Test-Path "dist")) {
    Write-Host "Frontend build not found. Running npm run build..." -ForegroundColor Yellow
    npm run build
}

# 2. Check if dependencies are met
Write-Host "Checking backend dependencies..." -ForegroundColor Gray
python -m pip install -r backend/requirements.txt --quiet

# 3. Start the server
Write-Host "Starting production server on http://localhost:8000" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop." -ForegroundColor Gray
$env:PYTHONPATH = ".;$env:PYTHONPATH"
python backend/main.py
