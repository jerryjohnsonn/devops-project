FROM node:20.9.0-alpine3.18

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

CMD ["npm","start"]