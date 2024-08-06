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
        <Button onClick={() => signIn('github')} 
        className="flex items-center gap-1 w-max
        border-4 rounded-none text-xl
        bg-btn-bg border-btn-border text-white shadow-inner
        hover:bg-white hover:text-black" >
          <FaGithub size={18} />
          {' '}
          GitHub
        </Button>
        <Button onClick={() => signIn('google')} 
          className="flex items-center gap-1 w-max
          border-4 rounded-none text-xl
          bg-btn-bg border-btn-border text-white shadow-inner
          hover:bg-white hover:text-black">
          <FaGoogle size={18} />
          {' '}
          Google
        </Button>
      </div>
    </>
  );
}
