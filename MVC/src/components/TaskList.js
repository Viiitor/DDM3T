// components/TaskList.js
import React from 'react';

function TaskList({ tasks, onToggleTask, onDeleteAllTasks }) {
    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onToggleTask(task.id)}
                        />
                        {task.text}
                    </li>
                ))}
            </ul>
            {tasks.length > 0 && (
                <button onClick={onDeleteAllTasks}>Apagar Todas as Tarefas</button>
            )}
        </div>
    );
}

export default TaskList;
