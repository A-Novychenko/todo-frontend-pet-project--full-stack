import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormInputList = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: auto;
  margin-left: auto;

  width: 400px;
  height: 200px;
`;
export const FormInputListItem = styled(Field)`
  width: 400px;
  height: 20px;
`;

export const InputWrapper = styled.label`
  display: flex;
  /* flex-direction: column; */
  align-items: baseline;
`;
