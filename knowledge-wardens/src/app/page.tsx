import { Session, getServerSession } from 'next-auth';
import Image from 'next/image';
import { authConfig } from './api/auth/[...nextauth]/authConfig';
import Home  from './Home';
import Logout from './Logout';

export default async function App() {
  const session: Session | null = await getServerSession(authConfig);

  if (!session) return <Home />;

  return <Home session={session}/>;
}
