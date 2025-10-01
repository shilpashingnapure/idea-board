# step 1 :  Node.js image
FROM node:20-alpine

# step 2 : Set working directory inside container
WORKDIR /backend

# step 3 : Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4 :  Copy the rest of your source code
COPY . .


# Step 5 : Build TypeScript
RUN npm run build

# Step 6: Expose port
EXPOSE 8000

# Step 7 : Command to run compiled code
CMD ["npm","start"]
