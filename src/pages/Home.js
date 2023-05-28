import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledHome = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  marginTop: '70px',
});

export default function Home() {
  return (
    <StyledHome>
      <Typography variant="h2">Welcome to the Contacts Book!</Typography>
      <Typography variant="body1">
        Manage your contacts easily and efficiently
      </Typography>
    </StyledHome>
  );
}
