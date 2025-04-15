FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Make sure the application runs on port 8080 for fly.io
ENV PORT=8080

# Run the app with gunicorn with explicit workers and timeout
RUN pip install gunicorn

# Use the correct app import path for the Flask application
CMD gunicorn --workers=2 --timeout=120 --bind :$PORT "app:create_app()" 