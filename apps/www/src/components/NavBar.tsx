import Image from 'next/image';
import Link from 'next/link';
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
  return (
    <div className="h-12 bg-bcgov-grey-light shadow-inner">
      <Container className="h-full">
        <ul className="flex flex-row gap-x-2 h-full leading-[48px]">
          <li className="h-full w-auto text-bcgov-blue-light border-transparent border-b-2 pr-2 active:border-bcgov-blue-dark active:text-bcgov-blue hover:border-bcgov-blue-light hover:text-bcgov-blue-light">
            <Link className="h-auto w-auto inline-block" href="/navigation">
              Navigation
            </Link>
          </li>
          <li className="h-auto w-auto text-bcgov-blue-light border-transparent border-b-2 pr-2 active:border-bcgov-blue-dark active:text-bcgov-blue hover:border-bcgov-blue-light hover:text-bcgov-blue-light">
            <Link className="h-full w-auto inline-block" href="/navigation">
              Navigation
            </Link>
          </li>
          <li className="h-auto w-auto text-bcgov-blue-light border-transparent border-b-2 pr-2 active:border-bcgov-blue-dark active:text-bcgov-blue hover:border-bcgov-blue-light hover:text-bcgov-blue-light">
            <Link className="h-full w-auto inline-block" href="/navigation">
              Navigation
            </Link>
          </li>
          <li className="h-auto w-auto text-bcgov-blue-light border-transparent border-b-2 pr-2 active:border-bcgov-blue-dark active:text-bcgov-blue hover:border-bcgov-blue-light hover:text-bcgov-blue-light">
            <Link className="h-full w-auto inline-block" href="/navigation">
              Navigation
            </Link>
          </li>
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
