FROM node:current-alpine

# Create app directory
WORKDIR /usr/src/app

RUN mkdir __data

VOLUME /usr/src/app/__data

RUN apk add --update --no-cache \
  make \
  g++ \
  python

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .

RUN npm ci
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY tsconfig.json .
COPY types types
COPY server server


EXPOSE 3000

ENTRYPOINT ["npm"]
CMD [ "start" ]
