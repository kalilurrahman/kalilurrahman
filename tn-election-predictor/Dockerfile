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

# Default port for Hugging Face Spaces is often 7860, 
# but we specify 8000 here to match our main.py.
EXPOSE 8000
ENV PORT=8000

# Run the backend server
CMD ["python", "backend/main.py"]
