import { RegisterOptions } from 'react-hook-form';

export const userNameValidators: RegisterOptions = {
  required: {
    value: true,
    message: 'Enter a valid ussername',
  },
};
