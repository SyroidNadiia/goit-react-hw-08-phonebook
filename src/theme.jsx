import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  status: {
    danger: '#cb5252',
  },
  palette: {
    primary: {
      main: '#978ce1',
      darker: '#463f7a',
    },
    neutral: {
      main: '#3a6fb9',
      contrastText: '#fff',
    },
  },
});