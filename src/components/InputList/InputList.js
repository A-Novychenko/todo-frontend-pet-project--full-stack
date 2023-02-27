import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import {
  FormInputList,
  FormInputListItem,
  InputWrapper,
} from './InputList.styled';

export class InputList extends Component {
  state = {
    inputArr: [1, 2],
  };

  handleForm = (values, { resetForm }) => {
    const id = nanoid();
    const { input } = values;
    const completed = false;
    const text = input;

    this.props.onChange({ id, text, completed });
    resetForm();
  };

  addInput = () => {
    this.setState(prevState => ({
      inputArr: [...prevState.inputArr, prevState.inputArr.length + 1],
      inputCount: prevState.inputCount + 1,
    }));
  };

  render() {
    const { inputArr } = this.state;

    return (
      <div>
        <Formik initialValues={{ input: '' }} onSubmit={this.handleForm}>
          <FormInputList>
            <InputWrapper>
              <p>1. </p>
              <FormInputListItem component="input" type="text" name="input" />
            </InputWrapper>
            {inputArr.map(el => (
              <InputWrapper key={nanoid()}>
                <p>{el + 1}. </p>
                <FormInputListItem component="input" type="text" name="input" />
              </InputWrapper>
            ))}

            {inputArr.length < 4 && (
              <button type="button" onClick={this.addInput}>
                Add field
              </button>
            )}
            <button type="submit">Submit</button>
          </FormInputList>
        </Formik>
      </div>
    );
  }
}
