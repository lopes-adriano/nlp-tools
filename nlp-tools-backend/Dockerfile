# Stage 1: Build stage
FROM python:3.11-slim AS build

# Set environment variables to prevent Python from writing .pyc files to disc
ENV PYTHONUNBUFFERED=1

# Set the working directory
WORKDIR /app

# Copy only the requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . .

# Stage 2: Runtime stage
FROM python:3.11-slim

# Set environment variables to prevent Python from writing .pyc files to disc
ENV PYTHONUNBUFFERED=1

# Set the working directory
WORKDIR /app

# Copy dependencies from the build stage
COPY --from=build /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY --from=build /app /app

# Expose port 5001
EXPOSE 5001

# Set environment variables for Flask
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=5001

# Start the Flask application using `python -m flask`
CMD ["python", "-m", "flask", "run"]
