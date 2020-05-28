# FROM node:lts-alpine 
 
# RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home 
 
# WORKDIR /home/node/api 
 
# COPY package.json yarn.* ./ 
 
# USER node 
 
# RUN yarn 
 
# COPY --chown=node:node . .
 
# EXPOSE 3001

# CMD ["yarn", "dev"]

# RUN chmod +x init.sh.

# ENTRYPOINT [ "./init.sh" ] 

# CMD ["yarn", "dev"]
# FROM node:10-alpine

# WORKDIR /usr/app
# COPY package.json yarn.lock ./

# RUN yarn

# COPY . .

# EXPOSE 3001
  
#ESSE FUNCIONOU
FROM node:lts-alpine

RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY package.json yarn.* ./

USER node

RUN yarn

COPY --chown=node:node . .

EXPOSE 3001

CMD ["yarn", "dev"]
