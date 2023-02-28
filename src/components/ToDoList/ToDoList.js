import PropTypes from 'prop-types';
import { ToDo } from 'components/ToDo';
import { List, Item, AddItem } from './ToDoList.styled';
import { MdOutlineAddCircleOutline } from 'react-icons/md';

export const TodoList = ({
  todos,
  page,
  onDeleteTodo,
  onCompletedTodo,
  onToggleModal,
  onHighPriorityTodo,
}) => (
  <>
    {(page === 'all' || page === 'completed') && (
      <>
        <h2>Виконані</h2>
        {todos.find(todo => todo.completed) && (
          <List>
            {todos.map(
              ({ id, text, completed }) =>
                completed && (
                  <Item key={id} backgroundColorDone>
                    <ToDo
                      completed={completed}
                      text={text}
                      onDeleteTodo={onDeleteTodo}
                      onCompletedTodo={onCompletedTodo}
                      onHighPriorityTodo={onHighPriorityTodo}
                      id={id}
                    ></ToDo>
                  </Item>
                )
            )}
          </List>
        )}
      </>
    )}

    {(page === 'all' || page === 'active') && (
      <>
        <h2>Важливі</h2>
        {todos.find(todo => todo.priority) && (
          <List>
            {todos.map(
              ({ id, text, completed, priority }) =>
                priority && (
                  <Item key={id} backgroundColorPriority>
                    <ToDo
                      completed={completed}
                      priority={priority}
                      text={text}
                      onDeleteTodo={onDeleteTodo}
                      onCompletedTodo={onCompletedTodo}
                      onHighPriorityTodo={onHighPriorityTodo}
                      id={id}
                    ></ToDo>
                  </Item>
                )
            )}
          </List>
        )}

        <h2>Звичайні</h2>
        <List>
          {todos &&
            todos.map(
              ({ id, text, completed, priority }) =>
                !priority &&
                !completed && (
                  <Item key={id}>
                    <ToDo
                      completed={completed}
                      text={text}
                      onDeleteTodo={onDeleteTodo}
                      onCompletedTodo={onCompletedTodo}
                      onHighPriorityTodo={onHighPriorityTodo}
                      id={id}
                    ></ToDo>
                  </Item>
                )
            )}

          <Item>
            <AddItem type="button" onClick={onToggleModal}>
              <MdOutlineAddCircleOutline
                size={96}
                color={'green'}
              ></MdOutlineAddCircleOutline>
            </AddItem>
          </Item>
        </List>
      </>
    )}
  </>
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
