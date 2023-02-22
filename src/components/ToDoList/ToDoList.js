import { ToDo } from 'components/ToDo';
import { List, Item } from './ToDoList.styled';

export const TodoList = ({ todos }) => (
  <List>
    {todos.map(({ id, description, completed }) => (
      <Item key={id}>
        <ToDo description={description} completed={completed}></ToDo>
      </Item>
    ))}
  </List>
);
