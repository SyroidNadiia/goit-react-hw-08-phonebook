import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledRegister = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  marginTop: '70px',
});

const Register = () => {
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

export default Register;
