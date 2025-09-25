import React from 'react';
import Todos from './components/Todos';
import Todo from './components/Models/todo';

function App() {
  const todos = [
    new Todo("learn ts"),
    new Todo("learn devops")
  ]

  return (
    <div className="App">
      <Todos items={todos} />

    </div>
  );
}

export default App;
