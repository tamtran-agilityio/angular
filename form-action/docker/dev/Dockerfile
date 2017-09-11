FROM node:8
RUN apt-get update
RUN apt-get install -y vim nano rubygems ruby-dev ruby`ruby -e 'puts RUBY_VERSION[/\d+\.\d+/]'`-dev build-essential
RUN npm install -g yarn
RUN gem install sass scss_lint
RUN yarn global add typescript@2.5.2 \
                 tslint@5.7.0 \
                 protractor@5.1.2 \
                 webdriver-manager@12.0.6 \
                 webpack@3.5.5 \
                 webpack-dev-server@2.7.1 \
                 karma-cli@1.0.1 \
                 karma-chrome-launcher@2.2.0 \
                 rimraf@2.6.1 \
                 phantomjs-prebuilt@2.1.15 \
                 @angular/cli@1.3.2 --exact

# Rebuild node-sass comparative with current node version
RUN npm rebuild node-sass --force
RUN npm install angular-cli
WORKDIR /workspace
# ADD package.json .
# ADD yarn.lock .

RUN yarn install
