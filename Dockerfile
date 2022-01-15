FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY ./src ./src
COPY ./doc ./doc
RUN mkdir -p ./logs/

CMD ["npm", "run", "start"]
