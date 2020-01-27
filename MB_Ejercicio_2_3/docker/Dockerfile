FROM node:10.16.3

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY mb_ejercicio_2_3/ /usr/app

EXPOSE 8888

ENTRYPOINT ["node /usr/app/dist/index.js"]