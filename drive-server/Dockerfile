# Step 1: Choose the base image
FROM node:16 as builder

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code to the working directory
COPY . .

# Build the TypeScript code
RUN npm run build

# Step 2: Set up the production image
FROM node:16-slim

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the built code from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Expose the port the app runs on
EXPOSE 3000

# Set the command to start the node server
CMD ["node", "dist/index.js"]
