import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik, Field } from 'formik';
import { Button, TextField } from '@mui/material';
import * as yup from 'yup';
import {
  FormContainer,
  FormLabel,
  ErrorMessageContainer,
} from './RegisterForm.styles';

const validationSchema = yup.object({
  name: yup.string().required('Required'),
  email: yup.string().required('Required').email('Invalid email address'),
  password: yup
    .string()
    .required('Required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
      'Password must contain at least one uppercase letter and one special character'
    ),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormContainer>
          <FormLabel>
            UserName
            <Field
              as={TextField}
              type="text"
              name="name"
              sx={{ width: '300px' }}
            />
            <ErrorMessageContainer name="name" component="div" />
          </FormLabel>
          <FormLabel>
            Email
            <Field
              as={TextField}
              type="email"
              name="email"
              sx={{ width: '300px' }}
            />
            <ErrorMessageContainer name="email" component="div" />
          </FormLabel>
          <FormLabel>
            Password
            <Field
              as={TextField}
              type="password"
              name="password"
              sx={{ width: '300px'}}
            />
            <ErrorMessageContainer name="password" component="div" />
          </FormLabel>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitting}
          >
            Register
          </Button>
        </FormContainer>
      )}
    </Formik>
  );
};
