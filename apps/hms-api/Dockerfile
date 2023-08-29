# Use the official Node.js 18 image.
FROM node:18-alpine AS base

FROM base AS builder
WORKDIR /tmp/build
COPY package*.json ./
COPY apps/hms-api/package.json ./apps/hms-api/
RUN npm ci
# Create and change to the app directory.
WORKDIR /tmp/build

# Copy application dependency manifests to the container image.
COPY package*.json ./
COPY apps/hms-api/package.json ./apps/hms-api/
RUN npm ci
COPY tsconfig.json ./
# Copy local code to the container image.
COPY apps/hms-api ./apps/hms-api

# generates the prisma client
RUN npx -w @bcgov-dt/hms-api prisma generate

#generates the dist folder for nest to run
RUN npm -w @bcgov-dt/hms-api run build

# openshift runs as a different user than what docker builds with
# this fixes the issue as related to the npm cache
RUN mkdir /.npm
RUN chgrp -R 0 /.npm && chmod -R g=u /.npm

# For debugging: create and write the contents of start.sh in the container
# RUN rm start.sh
# RUN echo "#!/bin/bash" >> start.sh && \
#     echo "# push the schema to the database and sync the client" >> start.sh && \
#     echo "npx prisma db push --schema='/usr/src/app/prisma/schema.prisma' --skip-generate " >> start.sh && \
#     echo "" >> start.sh && \
#     echo "# Start the application" >> start.sh && \
#     echo "npm run start:prod" >> start.sh

# Set execute permissions for the start.sh script.
RUN chmod +x ./apps/hms-api/start.sh

# Expose port 4000
EXPOSE 4000

# Start the application
CMD ["./apps/hms-api/start.sh"]