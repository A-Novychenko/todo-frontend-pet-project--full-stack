// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllTodo } from 'redux/todos/todosOperations';

import { useParams } from 'react-router-dom';

const TodosDetailsPage = () => {
  // const dispatch = useDispatch();
  // const todos = useSelector(st => st.todos.todos);

  // useEffect(() => {
  //   dispatch(getAllTodo());
  // }, [dispatch]);
  const { todoId } = useParams();

  return (
    <div>
      <p>title</p>
      <p>{`This is task ID:${todoId}`}</p>
    </div>
  );
};
export default TodosDetailsPage;
