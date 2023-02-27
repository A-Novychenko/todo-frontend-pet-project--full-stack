import { TodoList } from 'components/ToDoList';
import { Component } from 'react';
import { Container, Title } from './App.styled';
import { FormAdd } from 'components/FormAdd/FormAdd';
import { GlobalStyle } from 'constants/GlobalStyle';

export class App extends Component {
  state = {
    todos: [],
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

  onDeleteTodo = id =>
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));

  onCompletedTodo = id =>
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));

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

  render() {
    const { todos } = this.state;
    return (
      <>
        <Container>
          <Title>To Do</Title>
          <div>
            <p>Общее количество: {todos.length}</p>
            <p>Количество к выполнению: {this.fulfillmentCount()}</p>
          </div>
          <FormAdd onChange={this.onChangeTodos}></FormAdd>
          {todos && (
            <TodoList
              todos={todos}
              onDeleteTodo={this.onDeleteTodo}
              onCompletedTodo={this.onCompletedTodo}
            />
          )}
        </Container>
        <GlobalStyle />
      </>
    );
  }
}
