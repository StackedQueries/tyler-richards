FROM node:15

RUN npm install -g --unsafe-perm node-sass --save

WORKDIR /usr/src/app

COPY ./package.json ./
RUN yarn install
COPY . .
EXPOSE 5000

CMD ["yarn", "start"]