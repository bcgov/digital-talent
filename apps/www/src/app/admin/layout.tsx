'use client';

import { UsersIcon } from 'lucide-react';
import Content from '../../components/admin/layout/Content';
import Footer from '../../components/admin/layout/Footer';
import NavBar, { NavBarLinks } from '../../components/admin/layout/NavBar';

const links: NavBarLinks = [
  {
    text: 'Candidates',
    href: '/admin/candidates',
    icon: <UsersIcon />,
  },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row gap-4 overflow-y-hidden">
      <NavBar links={links} />
      <div className="flex flex-col gap-4 h-screen w-full overflow-y-auto">
        <Content>{children}</Content>
        <Footer />
      </div>
    </div>
  );
}
