// import { Session } from 'next-auth';
import Link from 'next/link';
import UnityGame from './UnityGame';

// type GameProps = {
//   session?: Session;
// };

export function Game() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("UseEffect execute");
  //   if (!session) {
  //     navigate("/");
  //   }
  // }, [session, navigate]);

  // Estas son las credenciales
  // const name: string = session?.user?.name || '';
  // const image: string = session?.user?.image || '';
  // const email: string = session?.user?.email || '';

  return (
    <>
      <main>
        <UnityGame />
      </main>
      <footer>
        <Link href="/">
          Back
        </Link>
      </footer>
    </>
  );
}
