# pull node image
FROM node:14.15-alpine

# set working dir
WORKDIR /app

# copy all files into working dir
COPY . /app

# Install React scripts
RUN npm install react-scripts -g --silent

# Install all other deps
RUN yarn install

# Expose CRAs default port 3000
EXPOSE 3000

# Run app
CMD ["yarn", "run", "start"]
