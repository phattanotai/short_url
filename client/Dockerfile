FROM node as builder

WORKDIR /home/node

# Install development dependencies
COPY package.json .
#COPY package-lock.json .

RUN yarn install

# Build react application
COPY . .
RUN npm run build
CMD ["npm", "start"]
# Use nginx to serve the react application
FROM nginx 
# Copy the react application
RUN rm -r /usr/share/nginx/html/*
RUN mkdir -p /usr/share/nginx/html/manage
COPY --from=builder /home/node/build /usr/share/nginx/html/manage

# Copy the nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf.tmp

# Copy the entrypoint script
# COPY ./docker-start.sh /entrypoint.sh

EXPOSE 80
# RUN chmod +x entrypoint.sh
# ENTRYPOINT [ "/entrypoint.sh" ]
# CMD [ "nginx", "-g", "daemon off;" ]
