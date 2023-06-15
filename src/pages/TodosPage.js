import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodo } from 'redux/todos/todosOperations';

const TodosPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector(st => st.todos.todos);

  useEffect(() => {
    dispatch(getAllTodo());
  }, [dispatch]);

  return (
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo._id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.createAt}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default TodosPage;
