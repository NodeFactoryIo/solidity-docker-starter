FROM node:carbon-alpine

# Install yarn and other dependencies via apk
RUN apk add --update git python make g++ && \
  rm -rf /tmp/* /var/cache/apk/*

WORKDIR /usr/app

# Install node dependencies - done in a separate step so Docker can cache it.
COPY yarn.lock .
COPY package.json .

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn generate

RUN chown -R node: .

USER node
