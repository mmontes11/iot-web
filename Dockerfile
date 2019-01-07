FROM node:8

ENV WORKDIR /usr/src/iot-web

RUN mkdir ${WORKDIR}

WORKDIR ${WORKDIR}

COPY package.json webpack.config.js postcss.config.js .babelrc ${WORKDIR}/

COPY src/ ${WORKDIR}/src

COPY public/ ${WORKDIR}/public

RUN npm install --development

RUN npm install --production

RUN npm run build

ADD dist ${WORKDIR}

RUN npm i -g serve

CMD ["serve", "-l", "80", "-s"]
