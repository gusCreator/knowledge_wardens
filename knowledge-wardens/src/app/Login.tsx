'use client';

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

export default function Login() {
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
