# Step 1: Use Node image
FROM node:20-alpine

# Step 2: Set working directory
WORKDIR /frontend

# step 3 : Copy package files and install dependencies
COPY package*.json ./
RUN npm install


# Step 4 :  Copy the rest of your source code
COPY . .

# Step 5: Build the next.js
RUN npm run build

# Step 7: Expose port
EXPOSE 3000

# Step 8: Run Next.js
CMD ["npm", "start"]