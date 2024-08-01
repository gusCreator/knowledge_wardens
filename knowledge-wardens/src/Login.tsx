import { useForm } from 'react-hook-form';
import { Input } from './components/forms/Input';
import { passwordValidator, userNameValidators } from './components/forms/validators';
import { Button } from './components/ui/button';
import { signIn } from 'next-auth/react';


export function Login () {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const authenticate = async (data: Object) => {
    await sleep(3000)
    console.log(data)
  }

  const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))
  return (
    <>
    <h1>Continue your adventure</h1>
    <form onSubmit={handleSubmit(authenticate)}>
      <Input
        register={register}
        validators={userNameValidators}
        name='username'
        errors={errors}
      />
      <Input
        register={register}
        validators={passwordValidator}
        type='password'
        name='password'
        errors={errors}
      />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Going' : 'Go'}
      </button>
    </form>
    <h3>or</h3>
    <Button onClick={() => signIn('github')}>
      GitHub
    </Button>
    <p>Don't you have an account? <a>Register here</a></p>
    </>
  )
}