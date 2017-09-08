FROM node:6.9
RUN apt-get update
RUN apt-get install -y vim nano rubygems ruby-dev ruby`ruby -e 'puts RUBY_VERSION[/\d+\.\d+/]'`-dev build-essential
RUN npm install -g yarn
RUN gem install sass scss_lint
RUN yarn global add typescript@2.0.10 \
                 tslint@4.0.0 \
                 protractor@4.0.11 \
                 webdriver-manager@10.2.8 \
                 webpack@2.2.0 \
                 webpack-dev-server@2.1.0-beta.0 \
                 karma-cli@1.0.1 \
                 karma-chrome-launcher@2.0.0 \
                 rimraf@2.5.2 \
                 phantomjs-prebuilt@2.1.13 \
                 @angular/cli@1.0.0 --exact

# Rebuild node-sass comparative with current node version
RUN npm rebuild node-sass --force
WORKDIR /workspace
ADD package.json .
# ADD yarn.lock .

RUN yarn install
