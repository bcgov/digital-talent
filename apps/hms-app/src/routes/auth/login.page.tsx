import { Button, Space } from 'antd';
// import { useAuth } from 'react-oidc-context';

export const LoginPage = () => {
  // const auth = useAuth();

  const login = async () => {
    const keycloakUrl = 'https://dev.loginproxy.gov.bc.ca/auth/realms/standard';
    const clientId = 'mod-chefs-local-3831';
    const redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`);

    window.location.href = `${keycloakUrl}/protocol/openid-connect/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
  };

  return (
    <Space align="center" direction="vertical" style={{ height: '100vh', width: '100vw', justifyContent: 'center' }}>
      <Button onClick={() => login()} type="primary">
        Log In
      </Button>
    </Space>
  );
};
