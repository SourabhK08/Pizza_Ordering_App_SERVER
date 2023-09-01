# base image
FROM node:alpine

# specifying working directory
WORKDIR '/server'

# copying package json 
COPY ./package.json ./

# installing dependencies
RUN npm install

# copying rest other files
COPY . .

# EXPOSING PORT

EXPOSE 8000

# Startup command
CMD ["npm", "run", "start:dev"]