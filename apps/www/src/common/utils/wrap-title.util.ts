export function wrapTitle(title?: string) {
  const defaultTitle = 'BC Public Service';

  return `${(title?.length ?? 0) > 0 && `${title} - `}${defaultTitle}`;
}
