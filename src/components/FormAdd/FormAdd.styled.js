import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormWrap = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Textarea = styled(Field)`
  display: flex;
  justify-content: center;

  /* margin-right: auto;
  margin-left: auto; */

  width: 400px;
  height: 200px;

  font-size: 20px;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 400px;
  height: 200px;
`;

export const AddContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 72px;
  margin-right: auto;
  margin-left: auto;

  width: 400px;
  height: 200px;
`;
