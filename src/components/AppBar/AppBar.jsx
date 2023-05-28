import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppBar as MuiAppBar, Container, Toolbar, Box } from '@mui/material';



export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MuiAppBar position="fixed">
      <Container>
        <Toolbar>
          <Navigation />
          <Box sx={{ flexGrow: 1 }} />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
