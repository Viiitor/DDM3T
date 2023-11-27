// src/services/taskService.js
const tasks = [];

const addTask = (task) => {
    tasks.push(task);
};

const getTasks = () => {
    return tasks;
};

export { addTask, getTasks };
