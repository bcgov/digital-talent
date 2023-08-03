#!/bin/bash

# Run migrations
npx prisma db push

# Start the application
npm run start:dev
