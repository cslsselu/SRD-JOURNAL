FROM node:18.14.0 as node
WORKDIR /app
COPY . .
RUN npm install -g ionic
RUN npm install -g cordova
RUN npm install 
RUN npm run build --prod
EXPOSE 3000
CMD ["ionic", "serve"]