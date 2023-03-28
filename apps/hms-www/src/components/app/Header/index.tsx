/* eslint-disable no-nested-ternary */
import { Button, Col, Dropdown, Image, MenuProps, Row } from 'antd';
import { useAuth } from 'react-oidc-context';
import { Link, NavLink } from 'react-router-dom';
import BCLogo from '../../../assets/bc-logo.png';

// const items: MenuProps['items'] = [
//   {
//     key: '1',
//     type: 'group',
//     label: 'Group title',
//     children: [
//       {
//         key: '1-1',
//         label: '1st menu item',
//       },
//       {
//         key: '1-2',
//         label: '2nd menu item',
//       },
//     ],
//   },
//   {
//     key: '2',
//     label: 'sub menu',
//     children: [
//       {
//         key: '2-1',
//         label: '3rd menu item',
//       },
//       {
//         key: '2-2',
//         label: '4th menu item',
//       },
//     ],
//   },
//   {
//     key: '3',
//     label: 'disabled sub menu',
//     disabled: true,
//     children: [
//       {
//         key: '3-1',
//         label: '5d menu item',
//       },
//       {
//         key: '3-2',
//         label: '6th menu item',
//       },
//     ],
//   },
// ];

export const Header = () => {
  const auth = useAuth();

  const items: MenuProps['items'] = [
    {
      key: 'account',
      type: 'group',
      label: auth.user?.profile.name,
      children: [
        {
          key: 'logout',
          label: 'Logout',
        },
      ],
    },
  ];

  // eslint-disable-next-line consistent-return
  const onClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case 'logout': {
        return auth.removeUser();
      }
    }
  };

  return (
    <header style={{ borderBottom: '1px solid #CCC', flexShrink: 0, marginBottom: '1em' }}>
      <Row align="middle" justify="space-between" style={{ gap: '1em', margin: '1em' }}>
        <Col flex="150px">
          <Link to="/">
            <Image preview={false} src={BCLogo} />
          </Link>
        </Col>
        <Col flex="auto" style={{ textAlign: 'right' }}>
          <NavLink to="/">
            <Button type="link">Home</Button>
          </NavLink>
          <NavLink to="/candidates">
            <Button type="link">Candidates</Button>
          </NavLink>
          <NavLink to="/hiring-managers">
            <Button type="link">Hiring Managers</Button>
          </NavLink>
          {/* Account Menu */}
          <Dropdown menu={{ items, onClick }} trigger={['click']}>
            <Button onClick={(e) => e.preventDefault()}>Account</Button>
          </Dropdown>
        </Col>
      </Row>
    </header>
  );
};