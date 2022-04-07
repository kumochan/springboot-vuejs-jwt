# Choose the Image which has Node installed already
# FROM node:lts-alpine => Window not support
FROM node:16

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm cache clean -f
RUN npm cache verify
RUN rm -rf node_modules
RUN rm -rf package-lock.json
RUN npm install -g npm

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
# RUN npm install @vue/cli-service --save-dev
RUN npm i @vue/cli-service
RUN npm run build:prod

EXPOSE 8080
CMD [ "http-server", "dist" ]