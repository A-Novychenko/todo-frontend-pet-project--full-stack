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

  useEffect(() => {
    const addTodo = async todo => {
      await API.addTodo(todo);
      const todoAdd = await API.getTodo();
      setTodos(todoAdd);
    };
    if (todo) {
      addTodo(todo);
    }
    return () => [];
  }, [todo]);

  useEffect(() => {
    const addTodo = async () => {
      const todoAdd = await API.getTodo();

      setTodos(todoAdd);
    };
    addTodo();
  }, []);

  const onDeleteTodo = async id => {
    await API.delTodo(id);

    setTodos(() => todos.filter(todo => todo.id !== id));
  };

  const changePage = type => {
    setPage(type);
  };

  const onCompletedTodo = async id => {
    const changeTodo = {
      ...todos.find(todo => todo.id === id),
      completed: !todos.find(todo => todo.id === id).completed,
      priority: false,
    };

    await API.updTodo(changeTodo);
    setTodos(() =>
      todos.map(todo => {
        if (todo.id === changeTodo.id) {
          return { ...todo, ...changeTodo };
        }
        return todo;
      })
    );
  };

  const onHighPriorityTodo = async id => {
    const changeTodo = {
      ...todos.find(todo => todo.id === id),
      priority: !todos.find(todo => todo.id === id).priority,
    };
    await API.updTodo(changeTodo);
    setTodos(() =>
      todos.map(todo => {
        if (todo.id === changeTodo.id) {
          return { ...todo, ...changeTodo };
        }
        return todo;
      })
    );
  };

  const fulfillmentCount = () => {
    return todos.reduce((acc, { completed }) => (completed ? acc : acc + 1), 0);
  };

  const clearTodos = async () => {
    setIsLoading(true);
    const clear = async () => {
      try {
        for (const todo of todos) {
          await API.delTodo(todo.id);
        }
      } catch (error) {
        // console.log(error);
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
            <p>До виконання: {fulfillmentCount()}</p>
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
          onCompletedTodo={onCompletedTodo}
          onHighPriorityTodo={onHighPriorityTodo}
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
