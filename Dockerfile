# FROM node:18.14.0 as node
# WORKDIR /app
# COPY . /app
# RUN npm install -g ionic
# RUN npm install -g cordova
# RUN npm install 
# # RUN npm run build --prod
# EXPOSE 3000
# CMD ["ionic", "serve"]

FROM node:18.14.0 as node
WORKDIR /app
COPY . /app
RUN npm install -g ionic
RUN npm install -g cordova
RUN npm install
RUN ionic build --prod
FROM nginx:1.21.3-alpine
COPY --from=node /app/www /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]