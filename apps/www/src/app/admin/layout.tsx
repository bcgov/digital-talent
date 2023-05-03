/* eslint-disable no-console */
// import { UsersIcon } from 'lucide-react';
// import Link from 'next/link';
// import { Button } from '../../components/ui/button';

// interface NavLink {
//   name: string;
//   href: string;
//   icon: React.ReactNode;
// }

// type NavLinks = NavLink[];

// interface NSBProps {
//   links: NavLinks;
// }

// function NavSideBar({ links }: NSBProps) {
//   return (
//     <div className="flex-1 shrink-0  h-screen left-0 z-50 block w-20 pb-4">
//       <div className="flex h-16 shrink-0 items-center justify-center">
//         {/* DT Logo */}
//         DT
//       </div>
//       <nav className="mt-8">
//         <ul className="flex flex-col items-center">
//           {links.map((link) => {
//             return (
//               <Link href={link.href} key={link.href}>
//                 <Button className="p3 text-sm font-semibold leading-6" type="button" variant="outline">
//                   {link.icon}
//                 </Button>
//               </Link>
//             );
//           })}
//         </ul>
//       </nav>
//     </div>
//   );
// }

// interface Props {
//   children: React.ReactNode;
// }

// const links: NavLinks = [
//   {
//     name: 'Candidates',
//     href: '/admin/candidates',
//     icon: <UsersIcon />,
//   },
// ];

// function Layout({ children }: Props) {
//   return (
//     <div className="flex flex-col gap-4">
//       <NavSideBar links={links} />
//       <div className="">{children}</div>
//     </div>
//   );
// }

// export default function AdminLayout({ children }: Props) {
//   return <Layout>{children}</Layout>;
// }

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
  // return (
  //   <div className="flex flex-row gap-4">
  //     <div className={state === 'narrow' ? 'w-16' : 'w-60'}>
  //       <Button
  //         onClick={() => {
  //           setState(state === 'narrow' ? 'wide' : 'narrow');
  //         }}
  //       >
  //         T
  //       </Button>
  //     </div>
  //     <div className="flex-auto">Test</div>
  //   </div>
  // );
  return (
    <div className="flex flex-row gap-4">
      <NavBar links={links} />
      <div className="flex flex-col gap-4 h-screen w-full">
        <Content>{children}</Content>
        <Footer />
      </div>
    </div>
  );
}
