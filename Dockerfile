FROM node:18-alpine

WORKDIR /react-vite-app


COPY package.json package-lock.json ./

RUN npm install --silent

COPY . ./

CMD ["npm", "run", "dev"]