import PropTypes from 'prop-types';

import { ToDo } from 'components/ToDo';
import { List, Item } from './ToDoList.styled';

export const TodoList = ({ todos, onDeleteTodo, onCompletedTodo }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <Item key={id}>
        <ToDo
          completed={completed}
          text={text}
          onDeleteTodo={onDeleteTodo}
          onCompletedTodo={onCompletedTodo}
          id={id}
        ></ToDo>
      </Item>
    ))}
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
