import Image from 'next/image';
import BCLogo from 'public/bc-logo.png';
import Container from './Container';

const LogoNav = () => {
  return (
    <div className="h-16">
      <Container className="h-full flex flex-row gap-x-4 items-center">
        <Image alt="Mountains" className="h-10 w-auto" src={BCLogo} />
        <div className="grow" />
      </Container>
    </div>
  );
};

const LinkNav = () => {
  return (
    <div className="h-12 bg-bcgov-grey-light shadow-inner">
      <Container className="h-full">
        <ul className="flex flex-row gap-x-2 h-full leading-[48px]">
          <li className="h-full w-auto text-bcgov-blue-light border-transparent border-b-2 pr-2 active:border-bcgov-blue-dark active:text-bcgov-blue hover:border-bcgov-blue-light hover:text-bcgov-blue-light">
            <a className="h-auto w-auto inline-block" href="/navigation">
              Navigation
            </a>
          </li>
          <li className="h-auto w-auto text-bcgov-blue-light border-transparent border-b-2 pr-2 active:border-bcgov-blue-dark active:text-bcgov-blue hover:border-bcgov-blue-light hover:text-bcgov-blue-light">
            <a className="h-full w-auto inline-block" href="/navigation">
              Navigation
            </a>
          </li>
          <li className="h-auto w-auto text-bcgov-blue-light border-transparent border-b-2 pr-2 active:border-bcgov-blue-dark active:text-bcgov-blue hover:border-bcgov-blue-light hover:text-bcgov-blue-light">
            <a className="h-full w-auto inline-block" href="/navigation">
              Navigation
            </a>
          </li>
          <li className="h-auto w-auto text-bcgov-blue-light border-transparent border-b-2 pr-2 active:border-bcgov-blue-dark active:text-bcgov-blue hover:border-bcgov-blue-light hover:text-bcgov-blue-light">
            <a className="h-full w-auto inline-block" href="/navigation">
              Navigation
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
};

const NavBar = () => {
  return (
    <div>
      <LogoNav />
      <LinkNav />
    </div>
  );
};

export default NavBar;
