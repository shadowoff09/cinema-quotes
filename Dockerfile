# Filename: Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY src/package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]
