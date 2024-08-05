import { Game } from '@/components/game/Game';
import { getServerSession } from 'next-auth';
import { authConfig } from '../api/auth/[...nextauth]/authConfig';
import { redirect } from 'next/navigation';

export default async function GamePage() {
  const session = await getServerSession(authConfig);

  if (!session) {
    redirect('/');
  }

  return (
    <Game session={session}/>
  );
}
