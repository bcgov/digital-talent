import { PropsWithChildren } from 'react';
import Content from '../../../components/public/layout/Content';
import Footer from '../../../components/public/layout/Footer';
import Header from '../../../components/public/layout/Header';

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}
