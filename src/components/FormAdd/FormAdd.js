import { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { FaListOl } from 'react-icons/fa';
import { CiTextAlignCenter } from 'react-icons/ci';
import {
  FormWrap,
  Textarea,
  FormContainer,
  AddContainer,
} from './FormAdd.styled';
import { InputList } from 'components/InputList';

export class FormAdd extends Component {
  state = {
    isActivType: true,
  };

  handleForm = (values, { resetForm }) => {
    const id = nanoid();
    const { text } = values;
    const completed = false;
    const priority = false;

    this.props.onChange({ id, text, completed, priority });
    resetForm();
  };

  toggleList = () => {
    this.setState({ isActivType: true });
  };
  toggleText = () => {
    this.setState({ isActivType: false });
  };

  render() {
    const { isActivType } = this.state;

    return (
      <AddContainer>
        <div>
          <button
            type="button"
            onClick={this.toggleList}
            disabled={isActivType}
            size={isActivType ? 32 : 20}
          >
            <CiTextAlignCenter />
          </button>
          <button
            type="button"
            onClick={this.toggleText}
            disabled={!isActivType}
            size={!isActivType ? 32 : 20}
          >
            <FaListOl />
          </button>
        </div>

        <FormContainer>
          {isActivType && (
            <Formik initialValues={{ text: '' }} onSubmit={this.handleForm}>
              <FormWrap component="form">
                <Textarea
                  type="text"
                  component={'textarea'}
                  name="text"
                ></Textarea>
                <button type="submit">ADD</button>
              </FormWrap>
            </Formik>
          )}
          {!isActivType && (
            <InputList onChange={this.props.onChange}></InputList>
          )}
        </FormContainer>
      </AddContainer>
    );
  }
}

FormAdd.propTypes = {
  onChange: PropTypes.func.isRequired,
};
