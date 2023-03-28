FROM node:19.8.1-alpine as build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:latest as final
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/app /usr/share/nginx/html
