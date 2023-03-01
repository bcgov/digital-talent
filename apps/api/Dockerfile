FROM node:18-alpine AS base
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1

FROM base AS deps
WORKDIR /tmp/www
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
COPY package*.json ./
COPY apps/api/package.json ./apps/api/
RUN npm pkg delete scripts.prepare
RUN npm ci

FROM base AS builder
WORKDIR /tmp/www
COPY --from=deps /tmp/www ./
COPY ./tsconfig.json ./
COPY ./apps/api ./apps/api
RUN npm install
RUN npm -w @bcgov-dt/api run build

FROM node:18-alpine AS runner
WORKDIR /www
COPY --from=builder /tmp/www/package*.json ./
COPY --from=builder /tmp/www/apps/api/package.json ./apps/api/
COPY --from=builder /tmp/www/apps/api/dist ./apps/api/dist
COPY --from=builder /tmp/www/apps/api/public ./apps/api/public
RUN npm install --omit=dev

EXPOSE 1337
ENV NODE_ENV production
ENV PORT 1337

# cd to /www/apps/api, as strapi expects to be run from the app root
WORKDIR /www/apps/api
CMD ["node", "./dist/src/server.js"]