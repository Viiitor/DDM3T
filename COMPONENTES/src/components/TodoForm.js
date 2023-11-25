// src/components/TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== '') {
            addTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Adicionar nova tarefa"
            />
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default TodoForm;
