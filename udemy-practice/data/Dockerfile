FROM node:8.8
RUN apt-get update
RUN apt-get install -y vim nano rubygems ruby-dev ruby`ruby -e 'puts RUBY_VERSION[/\d+\.\d+/]'`-dev build-essential
RUN npm install -g json-server

# Rebuild node-sass comparative with current node version
RUN npm rebuild node-sass --force
WORKDIR /workspace
