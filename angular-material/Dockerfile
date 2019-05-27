FROM node:12-alpine
ENV ROOT=/usr/src/app
RUN mkdir -p $ROOT
WORKDIR $ROOT
RUN yarn upgrade
RUN yarn global add @angular/cli
COPY package.json $ROOT
RUN yarn install
COPY ./ $ROOT
EXPOSE 9000
