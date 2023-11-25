// TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
    return (
        <li>
            {todo.title}
            <button onClick={() => onDelete(todo.id)}>Excluir</button>
        </li>
    );
};

export default TodoItem;
