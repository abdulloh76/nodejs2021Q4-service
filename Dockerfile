FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY ./src ./src
COPY ./doc ./doc
COPY ./logs ./logs

COPY  ./.env ./.env

CMD ["npm", "run", "start"]
