import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { FormWrap, Textarea, FormContainer, SaveBtn } from './FormAdd.styled';
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
} from 'redux/todos/todoSlice';

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
  const [addTodo] = useAddTodoMutation();
  const { data: todos } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const onSubmit = async ({ text }) => {
    if (!text.trim().length) {
      Notiflix.Notify.failure(
        'Нічого не записали! Для збереження запишіть щось в текстове поле'
      );
      return;
    }
    try {
      if (todos.length >= 100) {
        if (!window.confirm('Вже більше 100 todo. Почати перезапис?')) {
          onClose();
          return;
        }
        await deleteTodo(todos[0].id);
        await addTodo(text);
        onClose();
        return;
      }
      await addTodo(text);
      onClose();
    } catch (error) {
      console.log('error', error);
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
