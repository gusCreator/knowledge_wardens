import { Session } from "next-auth";
import { Login } from "./Login";
import { Logged } from "./Logged";
import { FaGithub } from "react-icons/fa";
import { Developers } from "./Developers";
import Image from "next/image";

type HomeProps = {
  session?: Session;
}

export function Home({ session }: HomeProps) {

  const name: string = session?.user?.name || '';
  const image: string = session?.user?.image || '';
  const email: string = session?.user?.email || '';


  return (
    <>
      <header className="flex flex-col justify-between items-center bg-main-image bg-cover bg-center min-h-[800px] max-h-full p-8">
        <h1 className="text-center text-5xl lg:text-7xl xl:text-7xl pt-5 text-yellow-600 font-extrabold">
          Knowledge Wardens
        </h1>
        <h3 className="text-gray-300 text-xl lg:text-2xl xl:text-2xl w-2/3 bg-gray-900 bg-opacity-75 bg- rounded-3xl p-4">
          The powerful witch wizard has possessed your master and there is only one way to defeat him. You must overcome their ancient knowledge. A legend is your hope, look for knowledge wardens and achieve the victory.
        </h3>
        <div className="p-8 bg-gray-900 bg-opacity-75 w-fit rounded-3xl border-yellow-500 border-4">
          {
            !session && <Login />
          }
          {
            session && <Logged name={name} image={image} email={email} />
          }
        </div>

      </header>
      <main>
        {/* Authors section */}
        <section>
          <h3>
            Learn and win
          </h3>
          <p>
            The powerful witch wizard has defeated and possessed your master and there is only one way to defeat him. You must overcome their ancient knowledge. A legend is your hope, it is said that a group of wardens lives in their temple in the forest, look for them and start your train to achieve victory.
          </p>
        </section>
        <Developers />
      </main>
      <footer className="flex justify-center bg-black p-5">
        <a href="https://github.com/gusCreator/knowledge_wardens" className="flex items-center gap-1 text-white"><FaGithub size={20} /> Visit repository</a>
      </footer>
    </>
  )
}