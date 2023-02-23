FROM node:18-alpine

WORKDIR /app

COPY src/package*.json ./

RUN npm install

COPY . .

WORKDIR /app/src

EXPOSE 3001

CMD ["npm", "run", "dev"]
