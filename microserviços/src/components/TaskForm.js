// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() === '') {
            return; // Evita adicionar tarefas vazias
        }

        addTask(newTask);
        setNewTask('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Nova Tarefa"
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Adicionar</button>
        </div>
    );
};

export default TaskForm;
