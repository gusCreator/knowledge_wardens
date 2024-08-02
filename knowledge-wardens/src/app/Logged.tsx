import { Button } from "@/components/ui/Button";
import { UserInfo } from "./UserInfo";

type LoggedProps = {
  name: string;
  image: string;
  email: string;
};

export function Logged({name, image, email}: LoggedProps) {
  const handleClick = () => {
    console.log("Redirect to Game");
  };
  return (
    <div className="flex flex-row gap-2">
      <UserInfo name={name} image={image} email={email}/>
      <Button className="self-center h-full" onClick={handleClick}>Continue Adventure</Button>
    </div>
  )
}