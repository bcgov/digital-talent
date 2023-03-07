import Footer from './Footer';
import NavBar from './NavBar';

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
