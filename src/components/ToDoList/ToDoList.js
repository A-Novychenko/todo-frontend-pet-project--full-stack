import PropTypes from 'prop-types';
import { RiDeleteBinLine } from 'react-icons/ri';

// import { ToDo } from 'components/ToDo';

import { List, Item, Description } from './ToDoList.styled';

export const TodoList = ({
  todos,
  onDeleteTodo,
  getDataModal,
  isOpenModal,
}) => (
  <List>
    {todos.map(({ id, description, completed }) => (
      <Item
        key={id}
        onClick={() => {
          getDataModal(id);
          isOpenModal();
        }}
      >
        <Description completed={completed}>{description}</Description>
        <RiDeleteBinLine
          type="button"
          onClick={() => onDeleteTodo(id)}
          size={100}
        >
          Удалить
        </RiDeleteBinLine>
      </Item>
    ))}
    1.Сделать делегирование/клик по кнопке на удаление 2. Проверить пропсы(после
    рефакторинга) *Добавить кнопку редактирования/ипут...
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
