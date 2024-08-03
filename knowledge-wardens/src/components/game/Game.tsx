import { Session } from "next-auth";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from 'react-unity-webgl';

type GameProps = {
  session?: Session;
}

export function Game({session}: GameProps) {

  const navigate = useNavigate();
  const { unityProvider } = useUnityContext({
    loaderUrl: '/Build/Build/Build.loader.js',
    dataUrl: '/Build/Build/Build.data.br',
    frameworkUrl: '/Build/Build/Build.framework.js.br',
    codeUrl: '/Build/Build/Build.wasm.br'
  });

  useEffect(() => {
    if (!session) {
      navigate("/");
      return;
    }
  }, [session, navigate]);


  // Estas son las credenciales
  const name: string = session?.user?.name || '';
  const image: string = session?.user?.image || '';
  const email: string = session?.user?.email || '';

  return (
    <>
      <main>
        <Unity unityProvider={unityProvider} />
      </main>
      <footer>
        <Link to="/">
          Back
        </Link>
      </footer>
    </>
  )
}