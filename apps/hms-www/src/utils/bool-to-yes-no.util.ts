export const boolToYesNo = (bool?: boolean | null) => {
  if (bool == null) return '';
  return bool ? 'Yes' : 'No';
};
