# BASE IMAGE

FROM node:alpine

# WORKING DIRECTORY

WORKDIR /server

# COPYING PACKAGE JSON FILE

COPY package.json ./

# INSTALL DEPENDENCIES

RUN npm install

# COPYING ALl OTHER FILES

COPY . .

# EXPOSING PORT

EXPOSE 5425

# STARTUP COMMAND

CMD [ "run","npm","start" ]