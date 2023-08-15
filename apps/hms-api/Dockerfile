# Use the official Node.js 18 image.
FROM node:18.17.0

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Copy the start.sh script to the Docker image.
COPY start.sh ./
RUN chmod +x ./start.sh

# Expose port 4000
EXPOSE 4000

# Start the application
CMD ["./start.sh"]