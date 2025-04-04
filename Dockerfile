# Use the official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (if available)
COPY package*.json ./

# Use a custom registry (if needed)
RUN npm config set registry https://registry.npmjs.org/

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy application source code
COPY . .

# Expose the port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
