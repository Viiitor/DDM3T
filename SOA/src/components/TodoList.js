// TodoList.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleAddTodo = () => {
        if (newTodo.trim() === '') {
            return;
        }

        const newTodoObject = { id: Date.now(), title: newTodo, completed: false };

        setTodos([...todos, newTodoObject]);
        setNewTodo('');
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>

            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={handleAddTodo}>Adicionar Tarefa</button>
            </div>

            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
