'use client';

import { PencilIcon, UsersIcon } from 'lucide-react';
import Content from '../../common/components/admin/layout/Content';
import Footer from '../../common/components/admin/layout/Footer';
import NavBar, { NavBarLinks } from '../../common/components/admin/layout/NavBar';

const links: NavBarLinks = [
  {
    text: 'Candidates',
    href: '/admin/candidates',
    icon: <UsersIcon />,
  },
  {
    text: 'Markdoc',
    href: '/admin/markdoc',
    icon: <PencilIcon />,
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
