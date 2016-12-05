FROM node

EXPOSE 80

# add user
ENV APP_USER raml-family
ENV APP_DIR /home/$APP_USER/app
RUN useradd -ms /bin/bash $APP_USER
USER $APP_USER

# add app dir
RUN mkdir $APP_DIR
WORKDIR $APP_DIR
COPY ./app $APP_DIR

RUN npm install \
  && npm run typings install \
  && npm run build

CMD ["node", "./dist/index.js"]
