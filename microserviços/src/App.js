// src/App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (title) => {
        setTasks([...tasks, { id: tasks.length + 1, title, completed: false }]);
    };

    const toggleTask = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const updateTask = (taskId, newTitle) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, title: newTitle } : task
        ));
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <TaskList tasks={tasks} toggleTask={toggleTask} updateTask={updateTask} />
            <TaskForm addTask={addTask} />
        </div>
    );
};

export default App;
