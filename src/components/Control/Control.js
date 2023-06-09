// import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';

import { TodoList } from 'components/ToDoList';

import {
  Container,
  Header,
  Title,
  Btns,
  BtnPage,
  AddBtn,
  AddDelBtnWrap,
  Controls,
} from './Control.styled';

import { GlobalStyle } from 'constants/GlobalStyle';

import { Time } from 'components/Time';
import { ThreeCircles } from 'react-loader-spinner';
import { useChangeStatusMutation, useGetTodosQuery } from 'redux/todoSlice';

export const Control = ({ toggleModal }) => {
  const [page, setPage] = useState('all');
  const [fulfillmentCount, setFulfillmentCount] = useState(0);
  const { data: todos, isLoading } = useGetTodosQuery();
  const [changeStatus] = useChangeStatusMutation();

  useEffect(() => {
    todos &&
      setFulfillmentCount(
        todos.reduce((acc, { completed }) => (completed ? acc : acc + 1), 0)
      );
  }, [todos]);

  const changePage = type => {
    setPage(type);
  };

  const statusChange = async (id, config) => {
    try {
      const changeTodo = todos.find(todo => todo.id === id);
      changeStatus({ ...changeTodo, ...config });
    } catch (error) {
      console.log('error;', error.message);
    } finally {
    }
  };

  return (
    <>
      <Header>
        <Container>
          <Time />
          <Title>To Do</Title>
          <div>
            <p>Загальна кількість: {todos && todos.length}</p>
            <p>До виконання: {fulfillmentCount}</p>
          </div>
          <Controls>
            <Btns>
              <BtnPage
                type="button"
                page={page}
                onClick={() => {
                  changePage('all');
                }}
              >
                Всі
              </BtnPage>
              <BtnPage
                type="button"
                page={page}
                onClick={() => {
                  changePage('active');
                }}
              >
                Активні
              </BtnPage>
              <BtnPage
                page={page}
                type="button"
                onClick={() => {
                  changePage('completed');
                }}
              >
                Виконані
              </BtnPage>
            </Btns>

            <AddDelBtnWrap>
              <AddBtn type="button" onClick={toggleModal}>
                Додати картку
              </AddBtn>
              <AddBtn type="button" onClick={null}>
                Очистити все
              </AddBtn>
            </AddDelBtnWrap>
          </Controls>
        </Container>
      </Header>
      <Container>
        <TodoList
          todos={todos}
          page={page}
          onStatus={statusChange}
          onToggleModal={toggleModal}
        />
      </Container>
      {isLoading && (
        <Container>
          <ThreeCircles
            height="300"
            width="300"
            color="#4fa94d"
            wrapperStyle={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </Container>
      )}
      <GlobalStyle />
    </>
  );
};

// Control.protoType = {
//   todo: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired,
//     priority: PropTypes.bool.isRequired,
//   }),
// };
