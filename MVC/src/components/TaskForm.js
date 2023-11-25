// components/TaskForm.js
import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [taskText, setTaskText] = useState('');

    const handleInputChange = (e) => {
        setTaskText(e.target.value);
    };

    const handleAddTask = () => {
        onAddTask(taskText);
        setTaskText('');
    };

    return (
        <div>
            <input type="text" value={taskText} onChange={handleInputChange} />
            <button onClick={handleAddTask}>Adicionar Tarefa</button>
        </div>
    );
}

export default TaskForm;
