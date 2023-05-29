import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import { Button, TextField } from '@mui/material';
import { logIn } from 'redux/auth/operations';
import {
  FormContainer,
  FormLabel,
  ErrorMessageContainer
} from '../RegisterForm/RegisterForm.styles';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <FormContainer>
          <FormLabel>
            Email
            <Field
              as={TextField}
              type="email"
              name="email"
              sx={{
                width: '300px' }}
            />
            <ErrorMessageContainer name="email" component="div" />
          </FormLabel>
          <FormLabel>
            Password
            <Field
              as={TextField}
              type="password"
              name="password"
              sx={{ width: '300px' }}
            />
            <ErrorMessageContainer name="password" component="div" />
          </FormLabel>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitting}
          >
            Log In
          </Button>
        </FormContainer>
      )}
    </Formik>
  );
};
