FROM node:8

# Install necessary packages
RUN apt-get update && apt-get install -y rubygems build-essential \
    && apt-get install -y ruby-dev

# Install gems
RUN gem install sass -v 3.4.25
RUN gem install compass -v 1.0.3

# Install node global modules
RUN npm install -g bower docpad@6.79 yarn

RUN npm install -g json-server

# User default user of node base image
USER node

# DocPad authentication.
RUN echo "{\n  subscribed: false\n  subscribeTryAgain: false\n  tos: true\n  identified: true\n}" > ~/.docpad.cson
