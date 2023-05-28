import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Button component={NavLink} to="/" variant="contained" color="primary">
          Home
        </Button>
        {isLoggedIn && (
          <Button
            component={NavLink}
            to="/contacts"
            variant="contained"
            color="primary"
          >
            Contacts
          </Button>
        )}
      </Box>
    </nav>
  );
};
