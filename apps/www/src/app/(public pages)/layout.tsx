import { PropsWithChildren } from 'react';
import Footer from '../../common/components/public/layout/Footer';
import Header from '../../common/components/public/layout/Header';

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="grow pt-20">{children}</div>
      <Footer />
    </div>
  );
}
