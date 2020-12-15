FROM mhart/alpine-node
WORKDIR /app
COPY . .
RUN npm install react-scripts -g --silent
RUN yarn install
EXPOSE 3000
CMD ["yarn", "run", "start"]
