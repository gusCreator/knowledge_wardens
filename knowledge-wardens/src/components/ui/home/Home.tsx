import { Session } from "next-auth";
import { Login } from "./Login";
import { Logged } from "./Logged";
import { FaGithub } from "react-icons/fa";
import { Developer } from "./Developer";

type HomeProps = {
  session?: Session;
}

export function Home({session}: HomeProps) {

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
        <div className="flex flex-wrap justify-center gap-5">
          <Developer username="gusCreator" trueName="Luis Gustavo Sequeiros" shortDescription="UNSA student"/>
          <Developer username="ynoacamino" trueName="Yenaro Joel Noa" shortDescription="UNSA student" />
          <Developer username="cmestasz" trueName="Christian Mestas Zegarra" shortDescription="UNSA student" />
          <Developer username="Alsnj20" trueName="Mariel Alisson Jara" shortDescription="UNSA student" />
          <Developer username="ALVARO-QUISPE-UNSA" trueName="Álvaro Raúl Quispe" shortDescription="UNSA student" />
          <Developer username="JhonatanDczel" trueName="Jhonatan david Arias" shortDescription="UNSA student" />
          <Developer username="rikich3" trueName="Ricardo Mauricio Chambilla" shortDescription="UNSA student" />
          <Developer username="Gocardi" trueName="Diego Alejandro Carbajal" shortDescription="UNSA student" />
        </div>
      </main>
      <footer className="flex justify-center">
        <a href="https://github.com/gusCreator/knowledge_wardens" className="flex items-center gap-1"><FaGithub size={20} /> Visit repository</a>
      </footer>
    </>
  )
}