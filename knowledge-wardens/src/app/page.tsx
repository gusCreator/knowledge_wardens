import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { authConfig } from './api/auth/[...nextauth]/authConfig';
import Login from './Login';
import Logout from './Logout';

export default async function Home() {
  const session = await getServerSession(authConfig);

  if (!session) return <Login />;

  return (
    <main>
      <div>
        <h1>
          Welcome
          {' '}
          {session.user?.name}
          <Image width={100} height={100} src={session.user?.image || ''} alt={session.user?.name || ''} />
          <span>
            Email:
            {' '}
            {session.user?.email}
          </span>
        </h1>
        <p>This is a protected page</p>
      </div>
      <Logout />
    </main>
  );
}
