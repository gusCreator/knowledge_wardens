import { Button } from "@/components/ui/Button";
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export function Login() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 min-w-80">
      <h4>Start adventure</h4>  
      <div className="flex flex-row gap-2">
        <Button onClick={() => signIn('github')} className="flex items-center gap-1 w-full">
          <FaGithub size={18} /> GitHub
        </Button>
        <Button onClick={() => signIn('google')} className="flex item-center gap-1 w-full">
          <FaGoogle size={18}/> Google
        </Button>
      </div>
    </div>
  )

}