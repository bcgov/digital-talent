import { Outlet } from 'react-router-dom';
import { Content } from '../../components/app/Content';
import { Footer } from '../../components/app/Footer';
import { Header } from '../../components/app/Header';

export const AppRoute = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </div>
  );
};
