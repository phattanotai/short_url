FROM node as builder
WORKDIR /home/node/build
# COPY package-lock.json .
COPY ./client/package.json .

# Install development dependencies
RUN yarn install

# Build react application
COPY ./client/. .
RUN npm run build



FROM node 
# Dependencies
RUN npm install -g nodemon prisma

# Copy the react application
COPY --from=builder /home/node/build/build /home/node/client/build

# Create workdir
WORKDIR /home/node/app

# Install dependencies
COPY ./server/package.json .
COPY ./server/package-lock.json .
RUN npm install

# Copy the rest of the app
COPY ./server/. .

# Generate prisma
RUN prisma generate

# Set permissions
RUN chown -R node:node .
USER node

# Environment
ENV NODE_ENV production
ENV PORT 4000
EXPOSE 4000

ENTRYPOINT ["/bin/sh", "./docker-start.sh"]
