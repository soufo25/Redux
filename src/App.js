import React from 'react';
import DisplayTodo from './components/DisplayTodo';
import Todo from './components/Todo';

function App() {
  return (
    <div className ='container'>
      <h1>My Todo-App</h1>
      <DisplayTodo />
      <Todo />
      
    </div>
  );
}

export default App;
