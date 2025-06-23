# Use the specified base image
FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

# Set the working directory
WORKDIR /workspace

# Copy package.json and package-lock.json (if available) from the parent directory
COPY ../package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code from the parent directory
COPY .. .

# Expose the port used by Vite
EXPOSE 5173

# Set the default command to run your application
CMD ["npm", "start"]

