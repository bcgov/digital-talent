import {
  AppstoreOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Layout as AntLayout, Menu } from 'antd';
import { useState } from 'react';
import { useAuth } from 'react-oidc-context';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Sider, Content, Footer } = AntLayout;

export const Layout = () => {
  const auth = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <AntLayout hasSider style={{ height: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        collapsedWidth="3.5rem"
        trigger={null}
        style={{
          boxShadow: '2px 0 5px 0 #CCC',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Avatar icon="DT" shape="square" style={{ margin: '0.5rem 0 0.5rem 0.75rem', flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto' }}>
            <Menu
              selectedKeys={[location.pathname]}
              style={{ flex: '1 0 auto' }}
              items={[
                {
                  key: '/',
                  icon: <HomeOutlined />,
                  label: <Link to="/">Home</Link>,
                },
                {
                  key: '/competitions',
                  icon: <AppstoreOutlined />,
                  label: <Link to="/competitions">Competitions</Link>,
                },
                {
                  key: '/settings',
                  icon: <SettingOutlined />,
                  label: <Link to="/settings">Settings</Link>,
                },
              ]}
            />
            <div style={{ flexShrink: 0 }}>
              <Menu
                selectedKeys={[location.pathname]}
                triggerSubMenuAction="click"
                items={[
                  {
                    key: 'account',
                    icon: <UserOutlined />,
                    label: 'Account',
                    children: [
                      {
                        type: 'group',
                        label: auth.user?.profile.name,
                      },
                      {
                        type: 'divider',
                      },
                      {
                        key: 'logout',
                        icon: <PoweroffOutlined />,
                        danger: true,
                        label: 'Logout',
                        onClick: async () => {
                          auth.removeUser();
                        },
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
          <div style={{ borderTop: '1px solid #CCC', flexShrink: 0 }}>
            <Button
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              type="link"
              style={{
                color: '#000',
                fontSize: '16px',
                margin: '0.5rem 0 0.5rem 0.75rem',
              }}
            />
          </div>
        </div>
      </Sider>
      <AntLayout style={{ height: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto' }}>
          <Content style={{ flex: '1 0 auto' }}>
            <Outlet />
          </Content>
          <Footer style={{ flexShrink: 0, padding: '1rem' }} />
        </div>
      </AntLayout>
    </AntLayout>
  );
};
