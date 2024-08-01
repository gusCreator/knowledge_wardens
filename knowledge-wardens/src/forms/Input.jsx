export function Input ({register, validators, type = "text", name, placeholder = "", errors}) {
  return (
    <>
      <label
        htmlFor={name}>
          {/* TODO: Capitalize first letter */}
          {`${name}: `}
      </label>
      <input 
        type={type}
        placeholder={placeholder}
        name={name}
        {...register(name, validators)}
        aria-invalid={errors ? "true" : "false"}
      />
      <small>
        {errors && <span>{errors.message}</span>}
      </small> 
    </>
  )
}