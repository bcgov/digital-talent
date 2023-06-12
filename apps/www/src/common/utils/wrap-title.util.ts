export function wrapTitle(title?: string) {
  const defaultTitle = 'Province of British Columbia';

  return `${(title?.length ?? 0) > 0 && `${title} - `}${defaultTitle}`;
}
