import { UserInfo } from "./UserInfo";
import Logout from "./Logout";
import { Link } from "react-router-dom";

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
        <Link to="/game" >Continue adventure</Link>
        <Logout />
      </div>
    </div>
  )
}