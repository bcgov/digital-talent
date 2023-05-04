'use client';

import { signIn } from 'next-auth/react';

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-1">
        <div className="my-auto">
          <div>
            <button onClick={() => signIn('keycloak')} type="button">
              Login
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
