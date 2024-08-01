import { FieldError, FieldErrors, FieldErrorsImpl, FieldValues, Merge, RegisterOptions, UseFormRegister } from "react-hook-form"


type InputProps = {
  register: UseFormRegister<FieldValues>;
  type?: string;
  name: string;
  placeholder?: string;
  errors: FieldErrors<FieldValues>;
  validators: RegisterOptions;
}

export function Input({ register, validators, type = "text", name, placeholder = "", errors }: InputProps) {
  const error = errors[name];
  return (
    <>
      <label
        htmlFor={name}>
        {/* TODO: Capitalize label */}
        {`${name}: `}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, validators)}
        aria-invalid={error? "true" : "false"}
      />
      {error && (
        <small>
          <span>{error?.message?.toString()}</span>
        </small>
      )}
    </>
  )
}