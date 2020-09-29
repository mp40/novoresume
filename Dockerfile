FROM node:14

WORKDIR /home/app

COPY package*.json ./

COPY wkhtmltoimage /usr/bin/wkhtmltoimage
COPY wkhtmltopdf /usr/bin/wkhtmltopdf
RUN chmod +x /usr/bin/wkhtmltopdf /usr/bin/wkhtmltoimage

RUN npm install

COPY . .

EXPOSE 9007

CMD ["node", "runServer.js"]