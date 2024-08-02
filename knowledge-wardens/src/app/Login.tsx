import { Button } from "@/components/ui/Button";
import { signIn } from "next-auth/react";

export function Login() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 min-h-screen min-w-80">
      <h4>Start adventure</h4>  
      <div className="flex flex-row gap-2">
        <Button onClick={() => signIn('github')} className="w-full">
          GitHub
        </Button>
        <Button onClick={() => signIn('google')} className="w-full">
          Google
        </Button>
      </div>
    </div>
  )

}