import { Typography } from '@mui/material';
import { StyledHome, BookImage } from '../components/sharedStyles.styles';
import book from '../images/preview.png';

export default function Home() {
  return (
    <StyledHome>
      <Typography variant="h2">Welcome to the Contacts Book!</Typography>
      <Typography variant="body1">
        Manage your contacts easily and efficiently
      </Typography>
      <BookImage src={book} alt="Contacts Book" />
    </StyledHome>
  );
}
