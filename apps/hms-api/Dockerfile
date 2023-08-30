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
FROM base AS runner
ARG NEXTAUTH_SECRET
ARG NEXTAUTH_URL
ARG KEYCLOAK_CLIENT_ID
ARG KEYCLOAK_CLIENT_SECRET
ARG KEYCLOAK_ISSUER
ENV NEXTAUTH_SECRET $NEXTAUTH_SECRET
ENV NEXTAUTH_URL $NEXTAUTH_URL
ENV KEYCLOAK_CLIENT_ID $KEYCLOAK_CLIENT_ID
ENV KEYCLOAK_CLIENT_SECRET $KEYCLOAK_CLIENT_SECRET
ENV KEYCLOAK_ISSUER $KEYCLOAK_ISSUER
WORKDIR /apps/hms-api
COPY --from=builder /tmp/build/apps/hms-api/dist ./dist
COPY /apps/hms-api/start.sh start.sh
COPY /apps/hms-api/prisma/prisma /prisma
COPY package*.json ./

RUN mkdir /.npm
RUN chgrp -R 0 /.npm && chmod -R g=u /.npm

# Set execute permissions for the start.sh script.
RUN chmod +x start.sh

# Expose port 4000
EXPOSE 4000

# Start the application
CMD ["/apps/hms-api/start.sh"]