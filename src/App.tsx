import React from 'react';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Todos items={["learn react"]} />

    </div>
  );
}

export default App;
