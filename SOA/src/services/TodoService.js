// TodoService.js
const API_URL = 'https://api.example.com/todos';

const TodoService = {
    getTodos: async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    },

    deleteTodo: async (id) => {
        const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        return response.json();
    },

    addTodo: async (title) => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, completed: false }),
        });
        return response.json();
    },
};

export default TodoService;
