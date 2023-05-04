import { PowerOffIcon } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { Button } from '../../../ui/button';
import { Separator } from '../../../ui/separator';

export interface NavBarLink {
  text: string;
  href: string;
  icon: React.ReactNode;
}

export type NavBarLinks = NavBarLink[];

export interface NavBarProps {
  links: NavBarLinks;
}

export default function NavBar({ links }: NavBarProps) {
  return (
    <div className="max-h-screen bg-gray-50 flex flex-col w-20 z-50 shadow-[0_0_2px_0_rgba(0,0,0,0.15)]">
      <div className="flex h-16 shrink-0 items-center justify-center font-extrabold">DT</div>
      <Separator className="mb-4" />
      <nav className="flex-grow overflow-y-auto">
        <ul className="flex flex-col items-center">
          {links.map((link) => {
            return (
              <Link href="/admin" key={link.href}>
                <Button
                  className="w-full p3 text-sm font-semibold leading-6 border-gray-500 gray-500 bg-gray-50 hover:text-white hover:bg-gray-500"
                  title={link.text}
                  variant="ghost"
                >
                  {link.icon}
                </Button>
              </Link>
            );
          })}
        </ul>
      </nav>
      <Separator className="mt-4" />
      <Button
        className="flex rounded-none h-16 shrink-0 items-center justify-center w-full p3 text-sm font-semibold leading-6 border-red-500 gray-500 bg-gray-50 hover:text-white hover:bg-red-500"
        onClick={() => signOut()}
        title="Sign Out from Digital Talent Admin"
        variant="ghost"
      >
        <PowerOffIcon />
      </Button>
    </div>
  );
}
