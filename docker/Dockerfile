FROM node:8.8
RUN apt-get update
RUN apt-get install -y vim nano rubygems ruby-dev ruby`ruby -e 'puts RUBY_VERSION[/\d+\.\d+/]'`-dev build-essential
RUN npm install -g yarn
RUN gem install sass scss_lint
RUN yarn global add @angular-devkit/core@0.0.23 \
                    @nrwl/schematics \
                    @angular/cli@latest \
                    karma-chrome-launcher@2.2.0 \
                    karma-cli@1.0.1 \
                    phantomjs-prebuilt@2.1.16 \
                    protractor@5.2.2 \
                    rimraf@2.6.2 \
                    tslint@5.8.0 \
                    typescript@2.6.2 \
                    webdriver-manager@12.0.6 \
                    webpack@3.10.0 \
                    webpack-dev-server@2.9.7

# Rebuild node-sass comparative with current node version
RUN npm rebuild node-sass --force
WORKDIR /workspace
# ADD package.json .
# ADD yarn.lock .

RUN yarn install

EXPOSE 8888
