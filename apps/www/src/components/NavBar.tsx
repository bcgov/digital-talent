import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BCLogo from 'public/bc-logo.png';
import Container from './Container';

function LogoNav() {
  return (
    <div className="border-b h-16">
      <Container className="h-full flex flex-row gap-x-4 items-center">
        <Link href="/">
          <Image alt="Mountains" className="h-10 w-auto" src={BCLogo} />
        </Link>
        <div className="grow" />
      </Container>
    </div>
  );
}

function LinkNav() {
  const router = useRouter();

  const links = [
    {
      href: '/',
      text: 'Candidates',
    },
    {
      href: '/hiring-managers',
      text: 'Hiring Managers',
    },
  ];

  return (
    <div className="h-12 bg-bcgov-grey-light shadow-inner">
      <Container className="h-full">
        <ul className="flex flex-row gap-x-2 h-full leading-[48px]">
          {links.map((link) => {
            return (
              <li
                key={link.href}
                className={`h-full w-auto text-bcgov-blue-light ${
                  router.pathname === link.href ? 'border-bcgov-blue' : 'border-transparent'
                } border-b-2 pr-2 active:border-bcgov-blue active:text-bcgov-blue hover:border-bcgov-blue-light hover:text-bcgov-blue-light`}
              >
                <Link className="h-auto w-auto inline-block" href={link.href}>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

export default function NavBar() {
  return (
    <div>
      <LogoNav />
      <LinkNav />
    </div>
  );
}
