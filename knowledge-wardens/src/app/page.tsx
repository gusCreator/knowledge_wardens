import { Session, getServerSession } from 'next-auth';
import { authConfig } from './api/auth/[...nextauth]/authConfig';
import App from './App';

export default async function Page() {
  const session: Session | null = await getServerSession(authConfig);

  if (!session) return <App />;

  return <App session={session}/>;
}
