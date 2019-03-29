FROM node:current-alpine

# Create app directory
WORKDIR /usr/src/app

RUN mkdir ./__data

VOLUME ./__data

RUN apk add --update make
RUN apk add --update g++
RUN apk add --update python

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm ci
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./tsconfig.json ./
COPY ./types ./types
COPY ./server ./server


EXPOSE 3000

CMD [ "npm", "start" ]
