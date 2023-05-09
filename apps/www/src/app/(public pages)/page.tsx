import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="grid grid-cols-2">
        <div>
          <Image alt="Government of British Columbia Logo" height={50} src="/bc-logo.png" width={200} />
        </div>
        <div className="my-auto">
          <h1 className="text-4xl font-medium">Digital Talent</h1>
        </div>
      </div>
    </main>
  );
}
