'use client';

import { Info, Menu } from 'lucide-react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../../../ui/navigation-menu.component';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '../../../ui/sheet.component';

function Navigation() {
  return (
    <>
      <div className="hidden sm:inline">
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
            {/* Hiring Options */}
            <NavigationMenuItem>
              <Link legacyBehavior passHref href="/hiring-managers/hiring-options">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Hiring Options</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* Cross-Ministry Hiring */}
            <NavigationMenuItem>
              <Link legacyBehavior passHref href="/hiring-managers/cross-ministry-hiring">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Cross-ministry hiring</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* About Digital Talent */}
            <NavigationMenuItem>
              <Link legacyBehavior passHref href="/learn/hiring-managers/about-digital-talent">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex sm:hidden justify-between w-full">
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
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              {/* About Digital Talent */}
              <Sheet>
                <SheetTrigger>
                  <NavigationMenuItem>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:cursor-pointer`}>
                      <Menu />
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </SheetTrigger>
                <SheetContent className="px-0" position="static" size="full">
                  <SheetHeader>
                    <SheetDescription className="mt-2 text-bcgov-blue-dark text-left">
                      <ul>
                        <li className="ml-4 py-2 border-b">
                          <Link className="w-full" href="/">
                            <SheetClose>
                              <div className="font-semibold select-none text-xl container px-auto">Digital Talent</div>
                            </SheetClose>
                          </Link>
                        </li>
                        <li className="ml-4 py-2 border-b">
                          <Link className="w-full" href="/hiring-managers/hiring-options">
                            <SheetClose>
                              <div className="font-semibold select-none text-xl container px-auto">Hiring Options</div>
                            </SheetClose>
                          </Link>
                        </li>
                        <li className="ml-4 py-2 border-b">
                          <Link className="w-full" href="/hiring-managers/cross-ministry-hiring">
                            <SheetClose>
                              <div className="font-semibold select-none text-xl container px-auto">
                                Cross-Ministry Hiring
                              </div>
                            </SheetClose>
                          </Link>
                        </li>
                        <li className="ml-4 py-2 border-b">
                          <Link className="w-full" href="/learn/hiring-managers/about-digital-talent">
                            <SheetClose>
                              <div className="font-semibold select-none text-xl container px-auto">
                                About Digital Talent
                              </div>
                            </SheetClose>
                          </Link>
                        </li>
                      </ul>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}

export default function Header() {
  return (
    <header className="h-16 fixed w-full z-50">
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
          <Navigation />
        </div>
      </div>
      {/* Navigation Bar */}
    </header>
  );
}
