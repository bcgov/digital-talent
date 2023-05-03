'use client';

import { signOut } from 'next-auth/react';
import { AuthProvider } from '../../components/auth.provider';

function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-1">
        <div className="my-auto">
          <h1 className="text-4xl font-medium">Admin Page</h1>
          <div>
            <button className="block mx-auto" onClick={() => signOut()} type="button">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AdminPage() {
  return (
    <AuthProvider>
      <Page />
    </AuthProvider>
  );
}
