import { PropsWithChildren } from 'react';
import Content from '../../../../common/components/public/layout/Content';
import Footer from '../../../../common/components/public/layout/Footer';
import Header from '../../../../common/components/public/layout/Header';

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}
