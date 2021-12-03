FROM node:16

WORKDIR /app

ENV PORT=8080
ENV ACCESS_TOKEN_SECRET="sdjflksadjflksdjfalsdkjf893279"
ENV DB_USER="admin"
ENV DB_PASSWORD="admin1234"
ENV DB_HOST="db"
ENV DB_PORT=2345
ENV DB_NAME="restaurant"

COPY . .

RUN npm i

CMD [ "npm", "start" ]