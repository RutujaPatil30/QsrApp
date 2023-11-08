import * as Yup from 'yup';

export const ValidationSchema = () => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, 'Please enter your correct name.')
      .required('Name required.'),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/i, 'Phone number invalid.')
      .required('Phone number required.'),
    email: Yup.string()
      .trim()
      .required('Email required')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please enter a valid email address',
      ),
    password: Yup.string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /\w*[!@#$%_]\w*$/,
        'Password can have !@#$_% as special character only',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password required.'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords do not match')
      .required('Confirm password required'),
  });

  const getCreateAccountValidationSchema = () => {
    return schema.pick([
      'name',
      'phoneNumber',
      'email',
      'password',
      'confirmPassword',
    ]);
  };

  const getLogInAccountValidationSchema = () => {
    return schema.pick(['email']);
  };

  return {
    getCreateAccountValidationSchema,
    getLogInAccountValidationSchema,
  };
};
