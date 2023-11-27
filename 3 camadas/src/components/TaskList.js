// src/components/TaskList.js
import React, { useState } from 'react';

const TaskList = ({ tasks, onAddTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        onAddTask(newTask);
        setNewTask('');
    };

    return (
        <div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    placeholder="Digite uma nova tarefa"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={handleAddTask}>Adicionar Tarefa</button>
            </div>
        </div>
    );
};

export default TaskList;
