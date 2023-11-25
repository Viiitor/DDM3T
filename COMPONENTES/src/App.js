// src/App.js
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
