FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

ARG REACT_APP_HOST

ENV REACT_APP_HOST $REACT_APP_HOST

RUN npm run build

EXPOSE 3000

CMD [ "npx", "serve", "build" ]