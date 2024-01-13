FROM node:20.9.0-alpine3.18 as build

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

EXPOSE 80

COPY --from=build /app/build /usr/share/nginx/html