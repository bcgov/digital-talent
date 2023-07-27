#!/bin/bash

# Run migrations
npx prisma migrate dev --name init

# Start the application
npm run start:dev
