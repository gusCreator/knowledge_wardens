import { Session, getServerSession } from 'next-auth';
import { authConfig } from './api/auth/[...nextauth]/authConfig';
import Home  from './Home';

export default async function App() {
  const session: Session | null = await getServerSession(authConfig);

  if (!session) return <Home />;

  return <Home session={session}/>;
}
