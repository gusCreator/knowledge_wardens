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
      <header className="flex flex-col justify-end items-center bg-main-image bg-cover bg-center min-h-[800px] max-h-full p-8">
        <div className="p-8 bg-gray-600 bg-opacity-40 w-fit rounded-3xl border-yellow-500 border-4">
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
        <Developers />
      </main>
      <footer className="flex justify-center">
        <a href="https://github.com/gusCreator/knowledge_wardens" className="flex items-center gap-1"><FaGithub size={20} /> Visit repository</a>
      </footer>
    </>
  )
}