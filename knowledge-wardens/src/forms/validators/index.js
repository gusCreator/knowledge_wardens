export const userNameValidators = {
  required: {
    value: true,
    message: "Enter a valid ussername"
  }
}
export const passwordValidator = {
  required: {
    value: true,
    message: "Enter a valid password"
  },
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters"
  }
}

