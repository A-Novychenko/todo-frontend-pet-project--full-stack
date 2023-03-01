import { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { FormWrap, Textarea, FormContainer, SaveBtn } from './FormAdd.styled';

Notiflix.Notify.init({
  width: '500px',
  position: 'center-center',
  closeButton: false,
  useIcon: false,
  fontSize: '20px',
  timeout: 1500,
});

export class FormAdd extends Component {
  handleForm = (values, { resetForm }) => {
    const id = nanoid();
    const { text } = values;
    const completed = false;
    const priority = false;

    if (text.trim().length) {
      this.props.onChange({ id, text, completed, priority });
      resetForm();
      this.props.onClose();
    } else {
      Notiflix.Notify.failure(
        'Нічого не записали! Для збереження запишіть щось в текстове поле'
      );
    }
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
