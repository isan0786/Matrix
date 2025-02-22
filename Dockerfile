FROM node:12.9.1

# Install nodemon for hot reloading
RUN npm install -g nodemon

#RUN npm install concurrently


# Create app directory
WORKDIR /app/server

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /app/server/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production



COPY . /app/server/

EXPOSE 3000


CMD npm start

