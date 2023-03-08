import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import * as API from '../../services/api';
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

export const Control = ({ todo, toggleModal }) => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [fulfillmentCount, setFulfillmentCount] = useState(0);

  useEffect(() => {
    const getTodos = async () => {
      try {
        setIsLoading(true);
        setTodos(await API.getTodo());
      } catch (error) {
        console.log('error;', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTodos();
  }, []);

  useEffect(() => {
    const addTodo = async () => {
      try {
        setIsLoading(true);
        await API.addTodo(todo);
        setTodos(await API.getTodo());
      } catch (error) {
        console.log('error;', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (todo) {
      addTodo();
    }
    return () => [];
  }, [todo]);

  useEffect(() => {
    setFulfillmentCount(
      todos.reduce((acc, { completed }) => (completed ? acc : acc + 1), 0)
    );
  }, [todos]);

  const onDeleteTodo = async id => {
    try {
      setIsLoading(true);
      await API.delTodo(id);
      setTodos(await API.getTodo());
    } catch (error) {
      console.log('error;', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const changePage = type => {
    setPage(type);
  };

  const statusChange = async (id, config) => {
    try {
      setIsLoading(true);
      const changeTodo = todos.find(todo => todo.id === id);
      await API.updTodo({ ...changeTodo, ...config });
      setTodos(await API.getTodo());
    } catch (error) {
      console.log('error;', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const clearTodos = async () => {
    setIsLoading(true);
    const clear = async () => {
      try {
        await API.resetTodo();
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    await clear();
    setTodos([]);
  };

  return (
    <>
      <Header>
        <Container>
          <Time />
          <Title>To Do</Title>
          <div>
            <p>Загальна кількість: {todos.length}</p>
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
              <AddBtn type="button" onClick={clearTodos}>
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
          onDeleteTodo={onDeleteTodo}
          onStatus={statusChange}
          // onCompletedTodo={onCompletedTodo}
          // onHighPriorityTodo={onHighPriorityTodo}
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

Control.protoType = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    priority: PropTypes.bool.isRequired,
  }),
};
