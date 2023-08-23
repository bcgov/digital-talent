import {
  AppstoreOutlined,
  DownOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Divider, Dropdown, Layout as AntLayout, Menu, Space } from 'antd';
import { useState } from 'react';
import { useAuth } from 'react-oidc-context';
import { Link, useLocation } from 'react-router-dom';

const { Sider, Header, Content, Footer } = AntLayout;

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
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto' }}>
          <Avatar icon="DT" shape="square" style={{ margin: '0.5rem 0 0.5rem 0.75rem' }} />
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
            ]}
          />
          <div style={{ flexShrink: 0 }}>
            <Menu
              selectedKeys={[location.pathname]}
              items={[
                {
                  key: '/settings',
                  icon: <SettingOutlined />,
                  label: <Link to="/settings">Settings</Link>,
                },
              ]}
            />
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
          <Header style={{ flexShrink: 0, height: '48px', lineHeight: '48px', padding: '0 1rem' }}>
            <div style={{ textAlign: 'right' }}>
              <Space size="small">
                <Divider style={{ height: '36px' }} type="vertical" />
                <Dropdown
                  trigger={['click']}
                  menu={{
                    items: [
                      {
                        key: 'logout',
                        danger: true,
                        icon: <PoweroffOutlined />,
                        label: 'Logout',
                        onClick: () => auth.removeUser(),
                      },
                    ],
                  }}
                >
                  <Space style={{ cursor: 'pointer', userSelect: 'none' }}>
                    <Avatar icon={<UserOutlined />} />
                    <span style={{ fontWeight: 400 }}>{auth.user?.profile?.name}</span>
                    <DownOutlined />
                  </Space>
                </Dropdown>
              </Space>
            </div>
          </Header>
          <Content style={{ flex: '1 0 auto' }}>
            <br />
          </Content>
          <Footer style={{ flexShrink: 0, padding: '1rem' }} />
        </div>
      </AntLayout>
    </AntLayout>
  );
};
