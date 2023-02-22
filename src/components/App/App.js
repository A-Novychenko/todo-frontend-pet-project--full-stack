import { TodoList } from 'components/ToDoList';
import { Component } from 'react';
import { Container, Title } from './App.styled';
import { Backdrop } from 'components/Modal/Modal';
import todosInitial from '../../dataBase/todosInitial.json';

export class App extends Component {
  state = {
    todos: todosInitial,
    isOpen: false,
    currentItem: {},
  };

  openModal = () => {
    this.setState({
      isOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  onDeleteTodo = id =>
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));

  fulfillmentCount = () =>
    this.state.todos.reduce(
      (acc, { completed }) => (completed ? acc : acc + 1),
      0
    );

  getDataModal = itemId => {
    this.setState({
      currentItem: this.state.todos.find(({ id }) => id === itemId),
    });
  };

  render() {
    const { todos, isOpen } = this.state;
    return (
      <Container>
        <Title>To Do</Title>
        <div>
          <p>Общее количество: {todos.length}</p>
          <p>Количество к выполнению: {this.fulfillmentCount()}</p>
        </div>
        <TodoList
          todos={todos}
          onDeleteTodo={this.onDeleteTodo}
          isOpenModal={this.openModal}
          getDataModal={this.getDataModal}
        />
        <Backdrop
          isOpenModal={isOpen}
          isCloseModal={this.closeModal}
          data={this.state.currentItem}
        ></Backdrop>
      </Container>
    );
  }
}
