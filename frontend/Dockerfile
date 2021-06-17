FROM node:current

WORKDIR /usr/src/app
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install
RUN npm rebuild node-sass
COPY . .
EXPOSE 3000

CMD ["yarn", "start"]