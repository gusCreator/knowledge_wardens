import { RegisterOptions } from 'react-hook-form'
export const userNameValidators: RegisterOptions = {
  required: {
    value: true,
    message: "Enter a valid ussername"
  }
}
export const passwordValidator: RegisterOptions = {
  required: {
    value: true,
    message: "Enter a valid password"
  },
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters"
  }
}

