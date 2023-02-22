# Filename: Dockerfile
FROM node:18-alpine
FROM ubuntu

WORKDIR /

RUN apt-get update && apt-get install -y git && apt-get install -y npm

RUN git clone https://github.com/shadowoff09/cinema-quotes

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]
