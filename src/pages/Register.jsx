import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Typography } from '@mui/material';
import { StyledRegister } from 'components/sharedStyles.styles';

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <StyledRegister>
        <Typography variant="h4">Registration</Typography>
        <RegisterForm />
      </StyledRegister>
    </>
  );
};

