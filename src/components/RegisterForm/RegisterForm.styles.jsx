import styled from 'styled-components';
import { Form,  ErrorMessage } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessageContainer = styled(ErrorMessage)`
  color: red;
  word-break: 'break-all';
  max-width: 300px;
  justify-content: center;
`;

