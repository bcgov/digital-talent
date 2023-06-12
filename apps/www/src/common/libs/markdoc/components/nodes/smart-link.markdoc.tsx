// See: https://stackoverflow.com/a/61061107

import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  href: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SmartLink({ children, href }: Props) {
  const pattern = /^http/;
  // return <div />;

  return pattern.test(href) ? (
    <a href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  ) : (
    <Link href={href}>{children}</Link>
  );
}
