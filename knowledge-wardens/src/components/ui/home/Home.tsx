import { Session } from 'next-auth';
import { FaGithub } from 'react-icons/fa';
import { Developers } from './Developers';
import { Header } from './Header';
import { Technologies } from './Technologies';

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
      <footer className="flex justify-center bg-black p-5">
        <a href="https://github.com/gusCreator/knowledge_wardens" className="flex items-center gap-1 text-white">
          <FaGithub size={20} />
          {' '}
          Visit repository
        </a>
      </footer>
    </>
  );
}
