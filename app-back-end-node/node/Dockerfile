FROM node:latest

RUN mkdir -p /home/node/api/node_modules
WORKDIR /home/node/api

COPY . .

RUN npm install 

EXPOSE 5000
CMD [ "npm", "start" ]