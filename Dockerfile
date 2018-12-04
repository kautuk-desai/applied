FROM node:current-alpine

WORKDIR /home/app

COPY . .
RUN ls \
    && npm install \
    && npm run-script build

EXPOSE 3000

CMD ["npm", "start"]