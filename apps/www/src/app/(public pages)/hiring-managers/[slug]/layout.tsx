import { PropsWithChildren } from 'react';
// import Content from '../../../../common/components/public/layout/Content';
import Footer from '../../../../common/components/public/layout/Footer';
import Header from '../../../../common/components/public/layout/Header';

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen">
      <Header />
      <div
        className="fixed flex flex-col h-[calc(100vh-theme(space.12))] overflow-y-auto !scroll-smooth top-12 w-screen"
        id="content-wrapper"
      >
        <div className="grow">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
