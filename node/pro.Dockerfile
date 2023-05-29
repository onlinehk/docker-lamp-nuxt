FROM --platform=linux/amd64 node:18
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./frontend /usr/src/app
RUN npm install
EXPOSE 80
RUN npm run build
CMD ["npm", "start"]