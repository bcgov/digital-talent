import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      {/* Top Header */}
      <div className="bg-white border-b drop-shadow flex flex-row h-12 fixed w-full">
        <div className="container mx-auto my-auto flex flex-row gap-2">
          <div>
            <Link href="/hiring-managers/cross-ministry-hiring-pilot" title="Home">
              <Image
                priority
                alt="Government of British Columbia Logo"
                height={34}
                src="/bc-logo.png"
                style={{ width: 130, height: 34 }}
                width={130}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Navigation Bar */}
    </header>
  );
}
