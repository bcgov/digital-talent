#!/bin/sh

# Run migrations
npx prisma db push --schema='/apps/hms-api/prisma/schema.prisma' --skip-generate 
# Start the application
npm run start:prod
