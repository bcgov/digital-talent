/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
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

export async function backupContainerVolumes() {
  const backupDir = path.join(__dirname, 'backup');
  const formattedBackupDir = os.platform() === 'win32' ? backupDir.replace(/\\/g, '/') : backupDir;

  const mounts = [
    { Type: 'volume', Name: 'hms-api_hms-api-test_eventstore-volume-data' },
    { Type: 'volume', Name: 'hms-api_hms-api-test_eventstore-volume-logs' },
    { Type: 'volume', Name: 'hms-api_hms-api-test_postgres-data' },
  ];

  if (mounts && mounts.length) {
    for (const mount of mounts) {
      if (mount.Type === 'volume') {
        const volumeName = mount.Name;
        console.log('backing up container volume: ', volumeName);
        await executeCommand(
          `docker run --rm -v ${volumeName}:/volume -v ${formattedBackupDir}:/backup busybox tar cvf /backup/${volumeName}.tar /volume`,
        );
      }
    }
    // console.log('Backup for container completed successfully.');
  } else {
    // console.log('No volumes found for the container.');
  }
}
