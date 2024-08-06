import { Session } from 'next-auth';
import { Login } from './Login';
import { Logged } from './Logged';

type HeaderProps = {
  session?: Session | null;
};

export function Header({ session }: HeaderProps) {
  const name: string = session?.user?.name || '';
  const image: string = session?.user?.image || '';
  const email: string = session?.user?.email || '';

  return (
    <header className="flex flex-col justify-between items-center 
    bg-main-mobile md:bg-main-desktop
     bg-cover bg-center min-h-[800px] max-h-full p-8">
      <h1 className="text-center text-5xl lg:text-7xl xl:text-7xl pt-5 text-yellow-600 font-extrabold  font-title">
        Knowledge Wardens
      </h1>
      <h3 className="text-gray-300 text-xl lg:text-2xl xl:text-2xl w-2/3 bg-gray-900 bg-opacity-75 bg- rounded-3xl p-4">
        The powerful witch wizard has possessed your master and there is only one way to defeat him. You must overcome their ancient knowledge. A legend is your hope, look for knowledge wardens and achieve the victory.
      </h3>
      <div className="flex flex-col p-8 gap-4 bg-gray-900 bg-opacity-75 w-fit rounded-3xl border-yellow-500 border-4">
        {
          !session && <Login />
        }
        {
          session && <Logged name={name} image={image} email={email} />
        }
      </div>
    </header>
  );
}
