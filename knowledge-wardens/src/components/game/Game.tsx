import { Session } from "next-auth";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UnityGame from './UnityGame';

type GameProps = {
  session?: Session;
}

export function Game({session}: GameProps) {

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("UseEffect execute");
  //   if (!session) {
  //     navigate("/");
  //   }
  // }, [session, navigate]);


  // Estas son las credenciales
  const name: string = session?.user?.name || '';
  const image: string = session?.user?.image || '';
  const email: string = session?.user?.email || '';

  return (
    <>
      <main>
        <UnityGame />
      </main>
      <footer>
        <Link to="/">
          Back
        </Link>
      </footer>
    </>
  )
}

