import { Session } from 'next-auth';
import { FaGithub } from 'react-icons/fa';
import { Login } from './Login';
import { Logged } from './Logged';
// import { Developer } from './Developer';
import { Developers } from './Developers';

type HomeProps = {
  session?: Session | null;
};

export function Home({ session }: HomeProps) {
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
        <Developers />
      </main>
      <footer className="flex justify-center">
        <a href="https://github.com/gusCreator/knowledge_wardens" className="flex items-center gap-1">
          <FaGithub size={20} />
          {' '}
          Visit repository
        </a>
      </footer>
    </>
  );
}
