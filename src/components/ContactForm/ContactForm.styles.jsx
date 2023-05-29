import styled from 'styled-components';
import { DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const ModalTitle = styled(DialogTitle)`
text-align: center;
`;

export const ModalCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  border-radius: 50%;
  border: solid 1px #d7d4f8;
  position: absolute;
  top: 8px;
  right: 8px;
`;