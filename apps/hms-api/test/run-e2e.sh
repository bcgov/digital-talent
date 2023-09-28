#!/bin/sh

# # Remove previous containers and associated volumes
# docker-compose -f docker-compose.test.yml down --volumes

# # Start docker images for testing
# docker-compose -f docker-compose.test.yml up -d

# # Generate prisma client from schema
# npx prisma generate

# # Populate testing database tables
# dotenv -e .env.test -- npx prisma db push --schema='prisma/schema.prisma' --skip-generate

# Run the e2e tests
dotenv -e .env.test -- npx jest test/app.e2e-spec.ts --watch --no-cache --config ./test/jest-e2e.json