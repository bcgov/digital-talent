/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */

import { EventStoreDBClient, FORWARDS, START } from '@eventstore/db-client';
import { PrismaClient } from '@prisma/client';

/* eslint-disable no-await-in-loop */
const { exec } = require('child_process');
const path = require('path');
const os = require('os');

function executeCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

export async function restoreContainerVolumes(): Promise<void> {
  // console.log('restoreContainerVolumes: ', containerName);
  const backupDir = path.join(__dirname, 'backup');
  const formattedBackupDir = os.platform() === 'win32' ? backupDir.replace(/\\/g, '/') : backupDir;

  await executeCommand(`docker-compose -f docker-compose.test.yml down`);

  const mounts = [
    { Type: 'volume', Name: 'hms-api_hms-api-test_eventstore-volume-data' },
    { Type: 'volume', Name: 'hms-api_hms-api-test_eventstore-volume-logs' },
    { Type: 'volume', Name: 'hms-api_hms-api-test_postgres-data' },
  ];

  if (mounts && mounts.length) {
    for (const mount of mounts) {
      if (mount.Type === 'volume') {
        const volumeName = mount.Name;

        // Clear the volume using a temporary container
        // await executeCommand(`docker run --rm -v ${volumeName}:/volume busybox sh -c "rm -rf /volume/*"`);

        // Delete and recreate the volume to ensure a clean slate
        await executeCommand(`docker volume rm --force ${volumeName}`);
        await executeCommand(`docker volume create ${volumeName}`);

        // console.log('restoring container volume: ', volumeName);
        await executeCommand(
          `docker run --rm -v ${volumeName}:/to -v ${formattedBackupDir}:/backup busybox sh -c "tar xvf /backup/${volumeName}.tar -C /to --strip-components=1"`,
        );
      }
    }
    // console.log('Restore completed successfully.');
  } else {
    // console.log('No volumes found for the container.');
  }

  // console.log('running docker compose up..');
  await executeCommand(`docker-compose -f docker-compose.test.yml up -d`);

  const prisma = new PrismaClient();

  async function waitForDatabaseToBeReady(retries = 100, delay = 100) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < retries; i++) {
      try {
        await prisma.$connect(); // Try connecting to the database
        // await prisma.user.findFirst(); // just connecting may not be enough
        await prisma.$disconnect(); // Disconnect after a successful connection
        // eslint-disable-next-line no-promise-executor-return
        // console.log('Connected to the database successfully!');
        return;
      } catch (error) {
        // console.log(`Attempt ${i + 1}: Unable to connect to the database. Retrying in ${delay / 1000} seconds...`);
        // eslint-disable-next-line no-promise-executor-return
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }

    throw new Error('Unable to connect to the database after multiple retries.');
  }

  const client = EventStoreDBClient.connectionString(
    'esdb://localhost:2114?tls=false&keepAliveTimeout=10000&keepAliveInterval=10000',
  );

  async function waitForEventStoreToBeReady(retries = 100, delay = 100) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < retries; i++) {
      try {
        // Try reading from a stream. If the database isn't ready, this will throw an error.
        await client.readStream('user-4e0b74a8-1b63-47fa-a082-684ab7301ea9', {
          direction: FORWARDS,
          fromRevision: START,
          maxCount: 1,
        });
        // console.log('Connected to EventStoreDB successfully!');
        return;
      } catch (error) {
        // console.log(`Attempt ${i + 1}: Unable to connect to EventStoreDB. Retrying in ${delay / 1000} seconds...`);
        // eslint-disable-next-line no-promise-executor-return
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }

    throw new Error('Unable to connect to EventStoreDB after multiple retries.');
  }
  // eslint-disable-next-line no-promise-executor-return
  // console.log('done running docker compose up..');
  await waitForDatabaseToBeReady();
  await waitForEventStoreToBeReady();

  // todo: for some reason still get a global 14 UNAVAILABLE: read ECONNRESET for eventstoredb (even though all tests still pass, suit fails)
  // eslint-disable-next-line no-promise-executor-return
  // await new Promise((resolve) => setTimeout(resolve, 500));
}
