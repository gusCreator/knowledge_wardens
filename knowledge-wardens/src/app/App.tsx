'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/Button';

export default function App() {
  return (
    <div className="flex flex-col w-full max-w-sm gap-2">
      <h1>
        Register or Login
      </h1>
      <Button onClick={() => signIn('github')} className="w-full">
        GitHub
      </Button>
      <Button onClick={() => signIn('google')} className="w-full">
        Google
      </Button>
    </div>
  );
}
