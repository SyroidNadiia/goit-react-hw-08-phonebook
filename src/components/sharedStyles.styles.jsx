import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

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
