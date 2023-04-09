FROM node:18.12

WORKDIR /app
COPY package*.json /app
USER node
CMD [ "npm", "run", "docker" ]