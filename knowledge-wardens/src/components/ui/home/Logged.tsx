import { Button } from "@/components/ui/Button";
import { UserInfo } from "./UserInfo";
import Logout from "./Logout";

type LoggedProps = {
  name: string;
  image: string;
  email: string;
};

export function Logged({ name, image, email }: LoggedProps) {
  const handleClick = () => {
    console.log("Redirect to Game");
  };
  return (
    <div className="flex flex-col gap-2">
      <UserInfo name={name} image={image} email={email} />
      <div className="flex gap-2 justify-center">
        <Button onClick={handleClick}>Continue Adventure</Button>
        <Logout />
      </div>
    </div>
  )
}