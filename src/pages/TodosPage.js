import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllTodo } from 'redux/todos/todosOperations';

const TodosPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector(st => st.todos.todos);

  useEffect(() => {
    dispatch(getAllTodo());
  }, [dispatch]);

  console.log('todo._id', todos);
  return (
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo._id}>
            <Link to={`${todo._id}`}>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <p>{todo.createAt}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default TodosPage;
