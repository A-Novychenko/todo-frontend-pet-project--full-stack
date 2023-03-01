import { TodoList } from 'components/ToDoList';
import { Component } from 'react';
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

export class App extends Component {
  state = {
    todos: [],
    showModal: false,
    page: 'all',
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos !== null) {
      this.setState({ todos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  changePage = type => {
    this.setState({ page: type });
  };

  toggleModal = () =>
    this.setState(({ showModal }) => ({ showModal: !showModal }));

  onDeleteTodo = id =>
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));

  onCompletedTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
            priority: false,
          };
        }
        return todo;
      }),
    }));
  };

  onHighPriorityTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            priority: !todo.priority,
          };
        }
        return todo;
      }),
    }));
  };

  fulfillmentCount = () =>
    this.state.todos.reduce(
      (acc, { completed }) => (completed ? acc : acc + 1),
      0
    );

  onChangeTodos = addsTodos => {
    this.setState(prevState => ({
      todos: [...prevState.todos, addsTodos],
    }));
  };

  clearTodos = () => {
    this.setState({
      todos: [],
    });
  };

  render() {
    const { todos, showModal, page } = this.state;
    const fulfillmentCount = this.fulfillmentCount;
    const onChangeTodos = this.onChangeTodos;
    const onCompletedTodo = this.onCompletedTodo;
    const onHighPriorityTodo = this.onHighPriorityTodo;
    const onDeleteTodo = this.onDeleteTodo;
    const toggleModal = this.toggleModal;
    const changePage = this.changePage;
    const clearTodos = this.clearTodos;

    return (
      <>
        <Header>
          <Container>
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
              <FormAdd onChange={onChangeTodos} onClose={toggleModal}></FormAdd>
              <CloseBtn type="button" onClick={toggleModal}>
                <GrClose size={24}></GrClose>
              </CloseBtn>
            </Modal>
          )}
        </Container>
        <GlobalStyle />
      </>
    );
  }
}
