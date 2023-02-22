import { ToDo } from 'components/ToDo';
import { List, Item } from './ToDoList.styled';

export const TodoList = ({ todos, hendlerDelete }) => (
  <List>
    {todos.map(({ id, description, completed }) => (
      <Item key={id}>
        <ToDo
          description={description}
          completed={completed}
          hendlerDelete={hendlerDelete}
          id={id}
        ></ToDo>
      </Item>
    ))}
  </List>
);
