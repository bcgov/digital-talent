'use client';

import { Info, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  LinkWithActiveState,
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
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // this fixes scroll issue due to smooth scrolling on html element (unknown cause) by temporarily disabling smooth scrolling for the duration of the
  // scroll up event and then re-enabling it back
  //
  // But according to chatGPT:
  // It's because the scroll animation might not have enough time to complete before
  // the new page renders and sets a new scroll position, especially on faster machines
  // or when the pages are not very heavy. This can result in the window not scrolling all the way to the top.
  useEffect(() => {
    // Scroll manually to the top with smooth enabled:  This fixes scroll to top issue, but also makes it scroll to top when pressing back button
    // window.scrollTo({ top: 0, behavior: 'smooth' });

    // Temporarily disable smooth scrolling
    document.documentElement.style.scrollBehavior = 'auto';

    // Re-enable smooth scrolling after the scroll is complete
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = '';
    });
  }, [pathname, searchParams]);

  const [isOpen, setIsOpen] = useState(false);

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
              {/* <LinkWithActiveState href="/hiring-managers/hiring-options">Hiring Options</LinkWithActiveState> */}
              <div className="relative">
                <LinkWithActiveState href="/hiring-managers/hiring-options" onMouseEnter={() => setIsOpen(true)}>
                  Hiring Options
                </LinkWithActiveState>

                {isOpen && (
                  <div className="absolute left-0 bg-white p-5 w-96" onMouseLeave={() => setIsOpen(false)}>
                    <Link
                      className="mb-3 block"
                      href="/hiring-managers/hiring-options"
                      onClick={() => setIsOpen(false)}
                    >
                      Available hiring options
                    </Link>
                    <Link
                      className="block"
                      href="/learn/hiring-managers/cross-ministry-hiring"
                      onClick={() => setIsOpen(false)}
                    >
                      Cross Ministry Hiring Program (CMHP)
                    </Link>
                    {/* <LinkWithActiveState variant="simple" className="mb-3 block" href="/hiring-managers/hiring-options">Available hiring options</LinkWithActiveState>
                    <LinkWithActiveState variant="simple" className="block" href="/learn/hiring-managers/cross-ministry-hiring">Cross Ministry Hiring Program (CMHP)</LinkWithActiveState> */}
                  </div>
                )}
              </div>
            </NavigationMenuItem>
            {/* About Digital Talent */}
            <NavigationMenuItem>
              <LinkWithActiveState href="/learn/about-digital-talent">About us</LinkWithActiveState>
              {/* <Link legacyBehavior passHref href="/learn/about-digital-talent">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About us</NavigationMenuLink>
              </Link> */}
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

                        <li className="ml-4 py-2 border-b pl-4">
                          <Link className="w-full" href="/hiring-managers/hiring-options">
                            <SheetClose>
                              <div className="font-semibold select-none text-xl container px-auto">
                                Available hiring options
                              </div>
                            </SheetClose>
                          </Link>
                        </li>

                        <li className="ml-4 py-2 border-b pl-4">
                          <Link className="w-full" href="/learn/hiring-managers/cross-ministry-hiring">
                            <SheetClose>
                              <div className="font-semibold select-none text-xl container px-auto">
                                Cross Ministry Hiring Program (CMHP)
                              </div>
                            </SheetClose>
                          </Link>
                        </li>

                        <li className="ml-4 py-2 border-b">
                          <Link className="w-full" href="/learn/about-digital-talent">
                            <SheetClose>
                              <div className="font-semibold select-none text-xl container px-auto">About Us</div>
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
            <a
              className="underline"
              href="https://submit.digital.gov.bc.ca/app/form/submit?f=98550cc5-59a9-44b2-862a-e003fa6d9e8c"
            >
              We'd love your feedback!
            </a>
          </div>
        </div>
      </div>
      {/* Top Header */}
      <div className="bg-white border-b drop-shadow flex flex-row h-12 text-bcgov-blue-dark">
        <div className="container mx-auto my-auto flex flex-row gap-8 mb-0">
          <Navigation />
        </div>
      </div>
      {/* Navigation Bar */}
    </header>
  );
}
