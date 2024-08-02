'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/Button';
import { Session } from 'next-auth';
import { Login } from './Login';
import { Logged } from './Logged';
import Logout from './Logout';

type HomeProps = {
  session?: Session;
}

export default function Home({ session }: HomeProps) {

  const name: string = session?.user?.name || '';
  const image: string = session?.user?.image || '';
  const email: string = session?.user?.email || '';

  return (
    <main className="grid place-content-center min-h-screen">
      {
        !session && <Login />
      }
      {
        session && <Logged name={name} image={image} email={email}/>
      }
      <Logout />
    </main>
  );
}
