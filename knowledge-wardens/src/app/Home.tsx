'use client';

import { Session } from 'next-auth';
import { Login } from './Login';
import { Logged } from './Logged';
import { FaGithub } from 'react-icons/fa'

type HomeProps = {
  session?: Session;
}

export default function Home({ session }: HomeProps) {

  const name: string = session?.user?.name || '';
  const image: string = session?.user?.image || '';
  const email: string = session?.user?.email || '';

  return (
    <>
      <header className="">
        {
          !session && <Login />
        }
        {
          session && <Logged name={name} image={image} email={email} />
        }
      </header>
      <main>
        {/* Authors section */}
      </main>
      <footer className="flex justify-center">
        <a href="https://github.com/gusCreator/knowledge_wardens" className="flex items-center gap-1"><FaGithub size={20}/> Visit repository</a>
      </footer>
    </>
  );
}
