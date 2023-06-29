'use client';

import NextLink from 'next/link';
import { cn } from '../utils/cn.util';

// See: https://stackoverflow.com/a/61061107

type Props = {
  children: React.ReactElement | string;
  className?: string;
  href: string;
  variant?: 'plain';
} & React.RefAttributes<HTMLAnchorElement>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Link({ className, children, href, variant }: Props) {
  const isExternalUrl = (url: string) => /^http/.test(url);

  const classes = cn(typeof children === 'string' && variant !== 'plain' && 'text-blue-500 underline', className);

  if (href.startsWith('#')) {
    return (
      <a className={classes} href={href.toString()}>
        {children}
      </a>
    );
  }

  if (isExternalUrl(href.toString())) {
    return (
      <a className={classes} href={href.toString()} rel="noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <NextLink className={classes} href={href}>
      {children}
    </NextLink>
  );
}
