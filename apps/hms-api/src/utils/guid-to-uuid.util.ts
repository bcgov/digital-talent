export const guidToUuid = (guid: string) =>
  [guid.slice(0, 8), guid.slice(8, 12), guid.slice(12, 16), guid.slice(16, 20), guid.slice(20)].join('-').toLowerCase();
