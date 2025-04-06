FROM node:22-alpine

WORKDIR /app

COPY ./package.json .

RUN npm install
RUN npm install uid
RUN npm install axios
RUN npm install random-color
RUN npm install motion
RUN npm install 

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]