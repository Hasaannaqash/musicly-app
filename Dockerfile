FROM  node:18

# Create app directory
RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

COPY . /usr/src/app

RUN npm install

RUN npm run build

CMD [ "node","dist/main" ]

EXPOSE 3000
