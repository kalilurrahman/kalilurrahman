# Hugging Face Deployment Script for TN Election Predictor 2026
# This script prepares the repository for a Docker-based Space on Hugging Face.

Write-Host "--- TN Election Predictor 2026: Hugging Face Deployment Prep ---" -ForegroundColor Cyan

# Define variables — User should update these
$YOUR_USERNAME = "kalilurrahman" # Update this
$YOUR_SPACE_NAME = "tnelectionpredictor2026" # Final corrected space name

# 1. Check for remote
$remotes = git remote
if ($remotes -notcontains "hf") {
    Write-Host "Adding Hugging Face remote..." -ForegroundColor Yellow
    $hf_url = "https://huggingface.co/spaces/$YOUR_USERNAME/$YOUR_SPACE_NAME"
    git remote add hf $hf_url
}

# 2. Add, Commit, Push
Write-Host "Staging changes for Phase 6 Deployment..." -ForegroundColor Gray
git add .
git commit -m "Phase 6 Deployment: Full production stack with FastAPI backend & Regional Simulation Engine"

Write-Host "Pushing to Hugging Face..." -ForegroundColor Green
Write-Host "Note: You may be asked for your Hugging Face Access Token." -ForegroundColor Yellow
git push hf main --force
