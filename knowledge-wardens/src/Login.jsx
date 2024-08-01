import { useState } from 'react'
import { useForm } from 'react-hook-form'


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
      <label
        htmlFor="username">
          Username:
      </label>
      <input 
        type="text"
        {...register("username", {
          required: {value: true, message: "Enter a vaild username"}
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
          required: {value: true, message: "Password must be 8 characters"},
          minLength: {value: 8, message: "Password must be 8 characters"}
        })} 
      />
      <small>
        {errors.password && <span>{errors.password.message}</span>}
      </small>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Going' : 'Go'}
      </button>
    </form>
    </>
  )
}