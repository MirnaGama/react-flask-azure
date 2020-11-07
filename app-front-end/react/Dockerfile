  
# Use Node Latest
FROM node:latest

# create and set app directory
WORKDIR /app

RUN mkdir -p /app/node_modules

# Bundle app source
COPY . . 

# start app
CMD ["npm", "start"]