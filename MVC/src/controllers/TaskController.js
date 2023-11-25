// controllers/TaskController.js
class TaskController {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
        };

        this.tasks.push(newTask);
        this.saveTasks();
    }

    toggleTaskCompletion(taskId) {
        this.tasks = this.tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        this.saveTasks();
    }

    deleteAllTasks() {
        this.tasks = [];
        this.saveTasks();
    }

    getTasks() {
        return this.tasks;
    }
}

export default TaskController;
