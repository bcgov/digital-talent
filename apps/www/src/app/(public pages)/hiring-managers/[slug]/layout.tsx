import { PropsWithChildren } from 'react';
// import Content from '../../../../common/components/public/layout/Content';
import Footer from '../../../../common/components/public/layout/Footer';
import Header from '../../../../common/components/public/layout/Header';

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen">
      <Header />
      <div className="grow pt-12">{children}</div>
      <Footer />
    </div>
  );
}
