# Step 1 - Run or Build React APP
FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

# EXPOSE 3000

# CMD ["npm","start"]

# Enable above comment[Comment below steps] If you do not want to follow below steps

RUN npm run build

# Step 2 - Server with NGinx

FROM nginx:1.27.3-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=build  ./app/build

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;"]

