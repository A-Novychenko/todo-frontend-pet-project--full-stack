import { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { FormWrap, Textarea, FormContainer, SaveBtn } from './FormAdd.styled';

export class FormAdd extends Component {
  handleForm = (values, { resetForm }) => {
    const id = nanoid();
    const { text } = values;
    const completed = false;
    const priority = false;

    this.props.onChange({ id, text, completed, priority });
    resetForm();
    this.props.onClose();
  };

  render() {
    return (
      <FormContainer>
        <Formik initialValues={{ text: '' }} onSubmit={this.handleForm}>
          <FormWrap component="form">
            <Textarea
              type="text"
              rows="20"
              component={'textarea'}
              name="text"
            ></Textarea>
            <SaveBtn type="submit">Зберегти</SaveBtn>
          </FormWrap>
        </Formik>
      </FormContainer>
    );
  }
}

FormAdd.propTypes = {
  onChange: PropTypes.func.isRequired,
};
