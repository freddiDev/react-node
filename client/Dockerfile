FROM node:16-alpine

LABEL version="1.0"
LABEL description="React Frontend for the Node JS"

WORKDIR /app

COPY ./package.json ./

RUN npm install --legacy-peer-deps
COPY . .

CMD ["npm", "run", "start"]