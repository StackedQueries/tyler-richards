FROM node:12-slim

WORKDIR /usr/src/app

COPY ./package.json ./
RUN npm i
COPY . .
EXPOSE 3000


ENV REACT_APP_BASE_URL = http://localhost:5000/api


CMD ["yarn", "start"]