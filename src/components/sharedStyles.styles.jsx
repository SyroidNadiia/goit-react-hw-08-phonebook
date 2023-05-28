import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Box } from '@mui/material';

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 70px;
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessageContainer = styled(ErrorMessage)`
  color: red;
`;

export const StyledIcon = styled(AddIcCallIcon)`
  color: blue;
  font-size: 52px;
`;

export const ButtonIcon = styled.button`
  border: none;
  background-color: #d7d4f8;
  cursor: pointer;
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;
