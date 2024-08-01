import { useForm } from 'react-hook-form'
import { Input } from './forms/Input'
import { passwordValidator, userNameValidators } from './forms/validators'


export function Login () {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const authenticate = async (data) => {
    await sleep(3000)
    console.log(data)
  }

  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
  return (
    <>
    <h1>Continue your adventure</h1>
    <form onSubmit={handleSubmit(authenticate)}>
      <Input 
        register={register}
        validators={userNameValidators}
        name='username'
        errors={errors.username}
      />
      <Input
        register={register}
        validators={passwordValidator}
        type='password'
        name='password'
        errors={errors.password}
      />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Going' : 'Go'}
      </button>
    </form>
    <p>Don't you have an account? <a>Register here</a></p>
    </>
  )
}