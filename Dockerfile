FROM node:18-alpine

WORKDIR /react-app

COPY public/ /react-app/public
COPY src/ /react-app/src
COPY package.json /react-app/package.json
COPY .eslintrc.js /react-app/.eslintrc.js
COPY .lintstagedrc /react-app/.lintstagedrc
COPY .npmrc /react-app/.npmrc
COPY .prettierrc /react-app/.prettierrc
COPY .stylelintrc.js /react-app/.stylelintrc.js
COPY .umirc.ts /react-app/.umirc.ts
COPY tsconfig.json /react-app/tsconfig.json
COPY typings.d.ts /react-app/typings.d.ts

RUN npm install

EXPOSE 8000

CMD [ "npm" ,"start"]
