import { TodoList } from 'components/ToDoList';
import { Component } from 'react';
import { Title } from './App.styled';
import todosInitial from '../../dataBase/todosInitial.json';

export class App extends Component {
  state = {
    todos: todosInitial,
  };
  render() {
    const { todos } = this.state;
    return (
      <>
        <Title>To Do</Title>
        <TodoList todos={todos} />;
      </>
    );
  }
}
