'use client';

import { Session } from 'next-auth';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Game } from '@/components/game/Game';
import { Home } from '@/components/ui/home/Home';

type AppProps = {
  session?: Session;
}

export default function App({ session }: AppProps) {

  const [isClient, setIsClient] = useState(false);

  // Solo se configura en el estado en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // TODO: Mostrar componente de Loading
    return null;
  }

  return (
    // Esta es la página principal de donde pueden partir todos los
    // componentes a reutilizar
    <Router>
      <Routes>
        <Route path="/game" element={<Game session={session} />} />
        <Route path="/" element={<Home session={session} />} />
      </Routes>
    </Router>
  );
}
