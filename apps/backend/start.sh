#!/bin/bash

# Run migrations
npx prisma db push --name init

# Start the application
npm run start:dev
