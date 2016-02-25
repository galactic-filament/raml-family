FROM node

EXPOSE 80

COPY ./app /srv/app
WORKDIR /srv/app

RUN npm install -g --silent typescript ts-node tsd \
  && tsc -v \
  && ts-node -v \
  && tsd -V \
  && npm install --silent \
  && tsd install

CMD ["ts-node", "./index.ts"]
