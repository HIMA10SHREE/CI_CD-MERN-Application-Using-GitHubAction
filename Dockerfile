FROM node:latest

RUN mkdir -p /app

COPY . /app

WORKDIR /app/client

RUN npm install

WORKDIR /app

RUN npm install

EXPOSE 3000 8000

ENTRYPOINT [ "npm", "run", "dev" ]