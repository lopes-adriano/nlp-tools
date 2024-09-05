# Stage 1: Build stage
FROM node:18-alpine AS build

# Set environment variables
ENV NODE_ENV=production
ENV CI=true

# Set the working directory
WORKDIR /app

# Copy only the package files
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Nuxt.js application
RUN npm run build

# Stage 2: Runtime stage
FROM node:18-alpine

# Set environment variables
ENV NODE_ENV=production
ENV CI=true

# Set the working directory
WORKDIR /app

# Copy dependencies and build artifacts from the build stage
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/.nuxt /app/.nuxt
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/.output /app/.output

# Expose port 3000
EXPOSE 3000

# Start the Nuxt.js application
CMD ["npm", "run", "preview"]
