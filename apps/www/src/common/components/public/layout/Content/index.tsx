import { PropsWithChildren } from 'react';

export default function Content({ children }: PropsWithChildren) {
  return <main className="flex-grow mt-12">{children}</main>;
}
