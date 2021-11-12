FROM node:16-alpine

RUN mkdir /opt/app
COPY ./dist/ /opt/app/dist/
COPY ./node_modules/ /opt/app/node_modules/
COPY ./openapi.json /opt/app

WORKDIR /opt/app
EXPOSE 8080
CMD [ "node", "dist/src/server.js" ]
