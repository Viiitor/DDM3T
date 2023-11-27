import React from 'react';

const ListaTarefas = ({ tasks, toggleTask, updateTask }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.title}
                    </span>
                    <button onClick={() => toggleTask(task.id)}>
                        {task.completed ? 'Desfazer' : 'Concluir'}
                    </button>
                    <button onClick={() => updateTask(task.id, prompt('Novo título:', task.title))}>
                        Alterar
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ListaTarefas;
