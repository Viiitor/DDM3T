// src/App.js
import React from 'react';
import TaskList from './components/TaskList';
import { useTaskContext, TaskProvider } from './state/TaskContext';

const App = () => {
  const { tasks, addTask } = useTaskContext();

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TaskList tasks={tasks} onAddTask={addTask} />
    </div>
  );
};

const AppWithState = () => {
  return (
    <TaskProvider>
      <App />
    </TaskProvider>
  );
};

export default AppWithState;
