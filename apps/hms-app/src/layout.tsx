// layout/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalHeader from './components/header/header';

const Layout = () => {
  return (
    <div>
      <GlobalHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
