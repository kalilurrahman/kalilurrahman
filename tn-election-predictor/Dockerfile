# Stage 1: Build the React frontend
FROM node:20-slim AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Python/FastAPI
FROM python:3.11-slim
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy backend requirements and install
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the build artifacts from the node stage
COPY --from=build-stage /app/dist ./dist

# Copy the backend source code
COPY backend ./backend

# Default port for Hugging Face Spaces is 7860
EXPOSE 7860
ENV PORT=7860

# Run the backend server
CMD ["python", "-m", "uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "7860"]
