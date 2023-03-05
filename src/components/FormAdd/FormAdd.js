import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
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

export const FormAdd = ({ onChange, onClose }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ text }) => {
    const id = nanoid();
    const completed = false;
    const priority = false;

    if (text.trim().length) {
      onChange({ id, text, completed, priority });
      onClose();
    } else {
      Notiflix.Notify.failure(
        'Нічого не записали! Для збереження запишіть щось в текстове поле'
      );
    }
  };

  return (
    <FormContainer>
      <FormWrap onSubmit={handleSubmit(onSubmit)}>
        <Textarea defaultValue="" {...register('text')} type="text" rows="20" />
        <SaveBtn type="submit">Зберегти</SaveBtn>
      </FormWrap>
    </FormContainer>
  );
};

FormAdd.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
