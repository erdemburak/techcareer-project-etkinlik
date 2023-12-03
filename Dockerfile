FROM node:21-alpine
WORKDIR /app
ENV PATH "./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD [ "npm", "start" ]