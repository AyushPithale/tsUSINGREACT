import React, { useState } from 'react';
import Todos from './components/Todos';
import Todo from './components/Models/todo';
import { NewTodo } from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text: string) => {
    console.log(text)
    const newTodo = new Todo(text)
    setTodos((prevState) => {
      return [...prevState, newTodo]
    })
  }

  return (
    <div className="App">
      <Todos items={todos} />
      <NewTodo onAddTodo={addTodoHandler} />

    </div>
  );
}

export default App;
