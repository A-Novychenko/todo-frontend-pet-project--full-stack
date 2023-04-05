// import PropTypes from 'prop-types';
import { ToDo } from 'components/ToDo';
import { List, Item, AddItem } from './ToDoList.styled';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { useGetTodosQuery } from 'redux/todoSlice';

export const TodoList = ({ page, onDeleteTodo, onToggleModal, onStatus }) => {
  const { data: todos } = useGetTodosQuery();

  return (
    <>
      {(page === 'all' || page === 'completed') && (
        <>
          {todos && todos.find(todo => todo.completed) && (
            <>
              <h2>Виконані</h2>
              <List>
                {todos.map(
                  ({ id, text, completed }) =>
                    completed && (
                      <Item key={id} backgroundColorDone>
                        <ToDo
                          completed={completed}
                          text={text}
                          onDeleteTodo={onDeleteTodo}
                          onStatus={onStatus}
                          id={id}
                        ></ToDo>
                      </Item>
                    )
                )}
              </List>
            </>
          )}
        </>
      )}

      {(page === 'all' || page === 'active') && (
        <>
          {todos && todos.find(todo => todo.priority) && (
            <>
              <h2>Важливі</h2>
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
                          onStatus={onStatus}
                          id={id}
                        ></ToDo>
                      </Item>
                    )
                )}
              </List>
            </>
          )}

          {todos && <h2>Звичайні</h2>}
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
                        onStatus={onStatus}
                        id={id}
                      ></ToDo>
                    </Item>
                  )
              )}

            <Item>
              <AddItem type="button" onClick={onToggleModal}>
                <MdOutlineAddCircleOutline
                  size={96}
                ></MdOutlineAddCircleOutline>
              </AddItem>
            </Item>
          </List>
        </>
      )}
    </>
  );
};

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//       completed: PropTypes.bool.isRequired,
//       priority: PropTypes.bool.isRequired,
//     }).isRequired
//   ).isRequired,
// };

// // import PropTypes from 'prop-types';
// import { ToDo } from 'components/ToDo';
// import { List, Item, AddItem } from './ToDoList.styled';
// import { MdOutlineAddCircleOutline } from 'react-icons/md';
// import { useGetTodosQuery } from 'redux/todoSlice';

// export const TodoList = ({
//   todos,
//   page,
//   onDeleteTodo,
//   onToggleModal,
//   onStatus,
// }) => {
//   // console.log('useGetTodosQuery', typeof useGetTodosQuery());

//   const { data, error } = useGetTodosQuery();
//   console.log('todos', data);
//   console.log('error', error);

//   return (
//     <>
//       {(page === 'all' || page === 'completed') && (
//         <>
//           {todos.find(todo => todo.completed) && (
//             <>
//               <h2>Виконані</h2>
//               <List>
//                 {todos.map(
//                   ({ id, text, completed }) =>
//                     completed && (
//                       <Item key={id} backgroundColorDone>
//                         <ToDo
//                           completed={completed}
//                           text={text}
//                           onDeleteTodo={onDeleteTodo}
//                           onStatus={onStatus}
//                           id={id}
//                         ></ToDo>
//                       </Item>
//                     )
//                 )}
//               </List>
//             </>
//           )}
//         </>
//       )}

//       {(page === 'all' || page === 'active') && (
//         <>
//           {todos.find(todo => todo.priority) && (
//             <>
//               <h2>Важливі</h2>
//               <List>
//                 {todos.map(
//                   ({ id, text, completed, priority }) =>
//                     priority && (
//                       <Item key={id} backgroundColorPriority>
//                         <ToDo
//                           completed={completed}
//                           priority={priority}
//                           text={text}
//                           onDeleteTodo={onDeleteTodo}
//                           onStatus={onStatus}
//                           id={id}
//                         ></ToDo>
//                       </Item>
//                     )
//                 )}
//               </List>
//             </>
//           )}

//           {todos && <h2>Звичайні</h2>}
//           <List>
//             {todos &&
//               todos.map(
//                 ({ id, text, completed, priority }) =>
//                   !priority &&
//                   !completed && (
//                     <Item key={id}>
//                       <ToDo
//                         completed={completed}
//                         text={text}
//                         onDeleteTodo={onDeleteTodo}
//                         onStatus={onStatus}
//                         id={id}
//                       ></ToDo>
//                     </Item>
//                   )
//               )}

//             <Item>
//               <AddItem type="button" onClick={onToggleModal}>
//                 <MdOutlineAddCircleOutline
//                   size={96}
//                 ></MdOutlineAddCircleOutline>
//               </AddItem>
//             </Item>
//           </List>
//         </>
//       )}
//     </>
//   );
// };

// // TodoList.propTypes = {
// //   todos: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       id: PropTypes.string.isRequired,
// //       text: PropTypes.string.isRequired,
// //       completed: PropTypes.bool.isRequired,
// //       priority: PropTypes.bool.isRequired,
// //     }).isRequired
// //   ).isRequired,
// // };
