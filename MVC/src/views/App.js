// views/App.js
import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskController from '../controllers/TaskController';

const taskController = new TaskController();

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(taskController.getTasks());
  }, []);

  const handleAddTask = (text) => {
    taskController.addTask(text);
    setTasks(taskController.getTasks());
  };

  const handleToggleTask = (taskId) => {
    taskController.toggleTaskCompletion(taskId);
    setTasks(taskController.getTasks());
  };

  const handleDeleteAllTasks = () => {
    taskController.deleteAllTasks();
    setTasks(taskController.getTasks());
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} onDeleteAllTasks={handleDeleteAllTasks} />
    </div>
  );
}

export default App;
