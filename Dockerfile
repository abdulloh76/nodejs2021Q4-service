FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i -g nodemon
RUN npm install

COPY ./src ./src
COPY ./doc ./doc

COPY  ./.env ./.env

CMD ["nodemon", "-L", "./src/server.ts"]
