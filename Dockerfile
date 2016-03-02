FROM node

EXPOSE 80

COPY ./app /srv/app
WORKDIR /srv/app

ENV TSD_GITHUB_TOKEN 9ab3e221b5267e45a22f9ab3067df8076653e094
RUN npm install -g --silent typescript ts-node tsd \
  && tsc -v \
  && ts-node -v \
  && tsd -V \
  && npm install --silent \
  && tsd install

CMD ["ts-node", "./index.ts"]
