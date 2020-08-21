FROM node:latest
COPY . /var/www
WORKDIR /var/www
RUN npm install 
ENTRYPOINT ["npm", "run", "start:prod"]
EXPOSE 3000