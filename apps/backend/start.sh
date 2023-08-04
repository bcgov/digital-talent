#!/bin/bash
whoami
# Run migrations
npx prisma db push

# Start the application
npm run start:dev
