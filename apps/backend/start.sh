#!/bin/bash

# Run migrations
npx prisma migrate dev --name init > app.log

# Start the application
npm run start:dev >> app.log
