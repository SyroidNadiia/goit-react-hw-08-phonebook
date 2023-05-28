import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button, Box, Typography } from '@mui/material';
import styled from 'styled-components';

const UserMenuContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

const UserName = styled(Typography)`
  margin-right: 10px;
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuContainer>
      <UserName variant="body1">{user.name}</UserName>
      <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button>
    </UserMenuContainer>
  );
};
