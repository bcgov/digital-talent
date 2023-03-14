FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat

FROM base as deps
WORKDIR /tmp/www
COPY package*.json ./
COPY apps/www/package.json ./apps/www/
RUN npm ci

FROM base AS builder
WORKDIR /tmp/www
COPY --from=deps /tmp/www ./
COPY ./tsconfig.json ./
COPY ./apps/www ./apps/www
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm -w @bcgov-dt/www run build

FROM base AS runner
WORKDIR /www
COPY --from=builder /tmp/www/apps/www/.next/standalone ./
COPY --from=builder /tmp/www/apps/www/public ./apps/www/public
COPY --from=builder /tmp/www/apps/www/.next/static ./apps/www/.next/static

EXPOSE 3000
ENV NODE_ENV production
ENV PORT 3000

CMD ["node", "./apps/www/server.js"]