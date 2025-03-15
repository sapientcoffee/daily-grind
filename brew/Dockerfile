# Use a Node.js base image with a suitable version
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json tsconfig.json ./

# Copy the rest of the application code
COPY src/ ./src
COPY prompts/ ./prompts

# Install dependencies
RUN npm install -g genkit@0.9.6
RUN npm install
RUN npm run build

# Expose the port your application listens on (e.g., 3000)
EXPOSE 4000

# Define the command to run your application
CMD ["npm", "run", "start"]