import Link from 'next/link';
import { UserInfo } from './UserInfo';
import Logout from './Logout';

type LoggedProps = {
  name: string;
  image: string;
  email: string;
};

export function Logged({ name, image, email }: LoggedProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <UserInfo name={name} image={image} email={email} />
      <div className="flex gap-2 justify-center items-center">
        <Link href="/game">Continue adventure</Link>
        <Logout />
      </div>
    </div>
  );
}
