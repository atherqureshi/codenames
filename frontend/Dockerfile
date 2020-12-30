FROM node:15.5.0

RUN npm install eslint -g
RUN npm install prettier -g
RUN npm install -g typescript

WORKDIR /app

COPY . /app/

RUN npm install
