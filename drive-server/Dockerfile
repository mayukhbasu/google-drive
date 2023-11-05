# Use a Node base image
FROM node:16-alpine as build

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install all dependencies in the container
RUN npm install

# Bundle app source inside the Docker image
COPY . .

# Build the project
RUN npm run build

# Start a new build stage
FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy over the built artifacts from the previous stage
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD ["node", "dist/index.js"]
