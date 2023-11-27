// src/state/TaskContext.js
import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
            {children}
        </TaskContext.Provider>
    );
};

const useTaskContext = () => {
    return useContext(TaskContext);
};

export { TaskProvider, useTaskContext };
