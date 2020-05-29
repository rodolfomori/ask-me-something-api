FROM node:lts-alpine

RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY package.json yarn.* ./

USER node

RUN yarn

COPY --chown=node:node . .

EXPOSE 3001

CMD ["yarn", "dev"]
