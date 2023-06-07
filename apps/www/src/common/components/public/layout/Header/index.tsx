'use client';

import { Info } from 'lucide-react';
import Link from 'next/link';
import { ListItem } from '../../../ui/list-item.component';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../../../ui/navigation-menu.component';

export default function Header() {
  return (
    <header className="h-16 fixed w-screen z-50">
      {/* Beta Bar */}
      <div className="bg-yellow-400 h-8 text-xs sm:text-sm text-bcgov-blue-dark">
        <div className="container flex flex-row h-full gap-8">
          <div className="mx-auto my-auto">
            <Info className="inline-block h-4 w-4 mr-2 -mt-1" />
            <span className="font-bold">BETA - This website is still being developed.</span>{' '}
            <a className="underline" href="/">
              We'd love your feedback!
            </a>
          </div>
        </div>
      </div>
      {/* Top Header */}
      <div className="bg-white border-b drop-shadow flex flex-row h-12 text-bcgov-blue-dark">
        <div className="container mx-auto my-auto flex flex-row gap-8">
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                {/* Wordmark */}
                <NavigationMenuItem>
                  <Link legacyBehavior passHref href="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <span className="font-semibold select-none text-xl">Digital Talent</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* Digital Hiring Options */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Digital hiring options</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="p-4 md:w-[400px] lg:w-[500px]">
                      <ListItem href="/hiring-managers/cross-ministry-hiring" title="Cross-Ministry Hiring">
                        As a hiring manager, find guidance here to set your team up for successful outcomes.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* About Digital Talent */}
                <NavigationMenuItem>
                  <Link legacyBehavior passHref href="/hiring-managers/learn/about-digital-talent">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>About us</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
      {/* Navigation Bar */}
    </header>
  );
}
