FROM node:18.16.0-alpine3.18
RUN apk add --no-cache make
RUN apk add --no-cache build-base
RUN apk add --no-cache python3 py3-pip

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

CMD [ "npm", "run", "serve" ]

