FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /tmp/hms-api
COPY package*.json ./
COPY apps/hms-api/package.json ./apps/hms-api/
COPY apps/hms-api/prisma ./apps/hms-api/prisma/
RUN npm pkg delete scripts.prepare
RUN npm ci

FROM base AS builder
WORKDIR /tmp/hms-api
COPY --from=deps /tmp/hms-api ./
COPY ./tsconfig.json ./
COPY ./apps/hms-api ./apps/hms-api/
RUN npm -w @bcgov-dt/hms-api run build

FROM base AS runner
WORKDIR /hms-api
COPY --from=builder /tmp/hms-api/package*.json ./
COPY --from=builder /tmp/hms-api/apps/hms-api/package.json ./apps/hms-api/
COPY --from=builder /tmp/hms-api/apps/hms-api/dist ./apps/hms-api/dist/
COPY --from=builder /tmp/hms-api/apps/hms-api/prisma ./apps/hms-api/prisma/
RUN npm install --omit=dev

EXPOSE 3000
ENV NODE_ENV production

WORKDIR /hms-api/apps/hms-api
CMD ["npm", "run", "start:migrate:prod"]