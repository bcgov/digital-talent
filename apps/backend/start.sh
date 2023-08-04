#!/bin/bash
whoami

ID=`id -u`
sed -i 's/:1001:/:'"$ID"':/g' /etc/passwd

# Run migrations
npx prisma db push

# Start the application
npm run start:dev
