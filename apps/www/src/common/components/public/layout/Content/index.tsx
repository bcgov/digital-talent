import { PropsWithChildren } from 'react';

export default function Content({ children }: PropsWithChildren) {
  return <main className="flex-grow my-12">{children}</main>;
}
