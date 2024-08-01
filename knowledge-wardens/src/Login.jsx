import { useState } from 'react'
import { useForm } from 'react-hook-form'


export function Login () {
  const [pending, setPending] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const authenticate = () => {
    setPending(true)
    setTimeout(() => {
      setPending(false)
    }, 1000)
  }
  return (
    <>
    <h1>Continue your adventure</h1>
    <form onSubmit={handleSubmit(authenticate)}>
      <label
        htmlFor="username">
          Username:
      </label>
      <input 
        type="text"
        {...register("username", {
          required: "Enter a valid username"
        })}
        aria-invalid={errors.username ? "true" : "false"}
      />
      <small>
        {errors.username && <span>{errors.username.message}</span>}
      </small> 
      <label 
        htmlFor="password">
          Password:
      </label>
      <input 
        type="password"
        {...register("password", {
          required: true,
          minLength: {value: 8, message: "Password is up to 8 characters"}
        })} 
      />
      <small>
        {errors.password && <span>{errors.password.message}</span>}
      </small>
      <button type="submit" disabled={pending}>
        {pending ? "Going" : "Go"}
      </button>
    </form>
    </>
  )
}