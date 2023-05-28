import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const StyledLogin = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  marginTop: '70px',
});

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <StyledLogin>
        <Typography variant="h4">Log In</Typography>
        <LoginForm />
      </StyledLogin>
    </>
  );
};

export default Login;
