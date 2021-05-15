FROM node:16-slim

WORKDIR /usr/src/app

COPY ./package.json ./
RUN npm i
COPY . .
EXPOSE 5000

CMD ["yarn", "start"]