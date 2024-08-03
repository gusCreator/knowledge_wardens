'use client';

import { Session } from 'next-auth';
import { Login } from './Login';
import { Logged } from './Logged';
import { FaGithub } from 'react-icons/fa'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

type HomeProps = {
  session?: Session;
}

export default function Home({ session }: HomeProps) {

  const [isClient, setIsClient] = useState(false);

  // Solo se configura en el estado en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // TODO: Mostrar componente de Loading
    return null;
  }

  const name: string = session?.user?.name || '';
  const image: string = session?.user?.image || '';
  const email: string = session?.user?.email || '';

  return (
    // Esta es la página principal de donde pueden partir todos los
    // componentes a reutilizar
    <Router>
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
      <Routes>
        <Route path="/game" element={<h1>Game page</h1>} />
        <Route path="/" element={<h1>Home page</h1>} />
      </Routes>
    </Router>
  );
}
