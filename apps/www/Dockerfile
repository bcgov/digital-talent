FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /tmp/build
COPY package*.json ./
COPY apps/www/package.json ./apps/www/
RUN npm ci

FROM base AS builder
WORKDIR /tmp/build
ENV NEXT_TELEMETRY_DISABLED 1
COPY --from=deps /tmp/build ./
COPY tsconfig.json ./
COPY apps/www ./apps/www
RUN npm -w @bcgov-dt/www run build

FROM base AS runner
WORKDIR /www
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
COPY --from=builder /tmp/build/apps/www/.next/standalone ./
COPY --from=builder /tmp/build/apps/www/public ./apps/www/public
COPY --from=builder /tmp/build/apps/www/.next/static ./apps/www/.next/static
# See https://github.com/vercel/next.js/discussions/41745#discussioncomment-5780610 for why we have 
# to copy the favicon like this
COPY --from=builder /tmp/build/apps/www/src/app/favicon.ico /tmp/build/apps/www/src/app/favicon.ico
# create .next/cache and assign ownership to `0` group so images can be cached
RUN mkdir /www/apps/www/.next/cache
RUN chgrp -R 0 /www/apps/www/.next/cache && chmod -R g=u /www/apps/www/.next/cache

EXPOSE 3000
CMD ["node", "apps/www/server.js"]