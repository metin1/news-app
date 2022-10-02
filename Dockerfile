# build
FROM node:16.17.1-alpine as client
WORKDIR /app/client
COPY client/package*.json ./
COPY client/.env ./

RUN npm install --legacy-peer-deps -qy
COPY client/ ./
RUN npm run build

# Setup the server
FROM node:16.17.1-alpine

WORKDIR /app/
COPY --from=client /app/client/build/ ./client/build/

WORKDIR /app/server/
COPY ./package*.json ./
RUN npm install --legacy-peer-deps -qy
COPY ./ ./

ENV PORT 8000

EXPOSE 8000

CMD ["npm", "start"]