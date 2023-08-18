import React from 'react';
import { Button, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import userManager from '../../user-manager';

const GlobalHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    userManager.removeUser();
    navigate('/auth/login');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '2rem', marginRight: '2rem' }}>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/competitions">Home</Link>
        </Menu.Item>

        {/* Other Menu.Items for additional navigation links can be added here */}
      </Menu>

      <Button danger onClick={handleLogout} style={{ marginTop: '7px' }} type="primary">
        Logout
      </Button>
    </div>
  );
};

export default GlobalHeader;
