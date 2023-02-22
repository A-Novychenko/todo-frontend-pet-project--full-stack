import { TodoList } from 'components/ToDoList';
import { Component } from 'react';
import { Title } from './App.styled';
import todosInitial from '../../dataBase/todosInitial.json';

export class App extends Component {
  state = {
    todos: todosInitial,
  };

  hendlerDelete = id => {
    this.setState(prevState => {
      return { todos: prevState.todos.filter(todo => todo.id !== id) };
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <Title>To Do</Title>
        <TodoList todos={todos} hendlerDelete={this.hendlerDelete} />;
      </>
    );
  }
}
