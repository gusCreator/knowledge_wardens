'use client';

import { Button } from '@/components/ui/Button';
import { signIn } from 'next-auth/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

export function Login() {
  return (
    <>
      <h3 className="text-center text-3xl lg:text-4xl xl-text-4xl text-orange-600 font-extrabold">
        Start adventure
      </h3>
      <div className="flex flex-row gap-2">
        <Button onClick={() => signIn('github')} className="flex items-center gap-1 w-full bg-yellow-500 text-black hover:bg-orange-600">
          <FaGithub size={18} />
          {' '}
          GitHub
        </Button>
        <Button onClick={() => signIn('google')} className="flex item-center gap-1 w-full bg-yellow-500 text-black hover:bg-orange-600">
          <FaGoogle size={18} />
          {' '}
          Google
        </Button>
      </div>
    </>
  );
}
