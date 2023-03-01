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

  width: 420px;
  /* height: 200px; */

  font-size: 20px;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* margin-top: 72px; */
  margin-right: auto;
  margin-left: auto;
  padding: 40px;

  width: 500px;
  /* height: 200px; */
`;

export const SaveBtn = styled.button`
  padding: 12px;
  width: 240px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;

  border-radius: 8px;
  border: 1px solid green;

  color: green;
  font-weight: 500;

  background-color: white;

  cursor: pointer;
  /* transition: color 250ms linear, background-color 250ms linear; */
  :hover {
    background-color: green;
    color: white;
  }
`;
