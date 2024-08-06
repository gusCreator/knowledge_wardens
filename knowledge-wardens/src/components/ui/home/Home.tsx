import { Session } from 'next-auth';
import { FaGithub } from 'react-icons/fa';
import { Developers } from './Developers';
import { Header } from './Header';
import { Technologies } from './Technologies';
import { Footer } from './Footer';

type HomeProps = {
  session?: Session | null;
};

export function Home({ session }: HomeProps) {
  return (
    <>
      <Header session={session} />
      <main>
        {/* Algunas imágenes del juego */}
        <Developers />
        <Technologies />
      </main>
      <Footer />
    </>
  );
}
