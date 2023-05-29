import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Typography } from '@mui/material';
import { StyledLogin } from '../components/sharedStyles.styles';


export default function Login() {
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

