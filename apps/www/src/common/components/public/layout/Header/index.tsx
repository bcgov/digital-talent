import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      {/* Top Header */}
      <div className="bg-white border-b drop-shadow flex flex-row h-12">
        <div className="container mx-auto my-auto flex flex-row gap-2">
          <div>
            <Link href="/cross-ministry-hiring-pilot" title="Home">
              <Image alt="Government of British Columbia Logo" height={44} src="/bc-logo.png" width={130} />
            </Link>
          </div>
        </div>
      </div>
      {/* Navigation Bar */}
    </header>
  );
}
