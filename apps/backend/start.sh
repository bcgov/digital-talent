#!/bin/bash

# Run migrations
npx prisma db push --schema='/usr/src/app/prisma/schema.prisma' --skip-generate 
# Start the application
npm run start:prod
