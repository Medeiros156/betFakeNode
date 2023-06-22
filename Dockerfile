# Base image
FROM node

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

RUN npx prisma generate
# Expose the port
EXPOSE 3000

# Command to run the application using the "start" script
CMD [ "npm", "run", "start" ]
