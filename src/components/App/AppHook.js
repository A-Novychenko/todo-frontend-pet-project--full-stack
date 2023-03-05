import { useState, useEffect } from 'react';
import * as API from '../../services/api';
import { TodoList } from 'components/ToDoList';
import { GrClose } from 'react-icons/gr';
import {
  Container,
  Header,
  Title,
  Btns,
  BtnPage,
  AddBtn,
  AddDelBtnWrap,
  Controls,
} from './App.styled';
import { FormAdd } from 'components/FormAdd/FormAdd';
import { GlobalStyle } from 'constants/GlobalStyle';
import { Modal, CloseBtn } from 'components/Modal';
import { Time } from 'components/Time';

export const AppHook = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState('all');
  const [showModal, setShowModal] = useState(false);

  const addTodo = async todo => {
    const todoAdd = await API.addTodo(todo);
    setTodos(prevState => [...prevState, todoAdd]);
    console.log('ADD resp', todoAdd);
  };

  const onDeleteTodo = async id => {
    const resp = await API.delTodo(id);
    console.log(resp);
    setTodos(() => todos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    async function fetchData() {
      const response = await API.getTodo();
      setTodos(response);
    }
    fetchData();
  }, [setTodos]);

  const changePage = type => {
    setPage(type);
  };

  const toggleModal = () => setShowModal(!showModal);

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

  const clearTodos = () => {
    setTodos([]);
    addTodo([]);
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
        {showModal && (
          <Modal onClose={toggleModal}>
            {/* <FormAdd onClose={toggleModal}></FormAdd> */}
            <FormAdd onChange={addTodo} onClose={toggleModal}></FormAdd>
            <CloseBtn type="button" onClick={toggleModal}>
              <GrClose size={24}></GrClose>
            </CloseBtn>
          </Modal>
        )}
      </Container>
      <GlobalStyle />
    </>
  );
};
