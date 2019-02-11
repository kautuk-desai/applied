FROM node:current-alpine

WORKDIR /home/app

COPY ./package* ./
RUN ls \
    && npm install

COPY . .
RUN npm run-script build

EXPOSE 3000

CMD ["npm", "start"]