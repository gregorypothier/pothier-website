# Setup node
FROM node:10 as react-build

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./

RUN npm install && npm cache clean --force

COPY . .

RUN npm run build

# Setup nginx
FROM nginx:1.17.6-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=react-build /usr/src/app/build /var/www

EXPOSE 80

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]