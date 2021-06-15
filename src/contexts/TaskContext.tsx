import { createContext, useContext, useState, useEffect } from 'react';

type Tasks = {
    key: number;
    tarefa: string;
}

type TaskContextData = {
    tasks: Tasks[];
    currentTask: string;
    setCurrentTask: any;
    currentTaskIndex: number;
    setCurrentTaskIndex: any;
    changeTask: (task) => void;
    incrementTask: () => void;
    removeTask: (index: number) => void
}

const TaskContext = createContext({} as TaskContextData);

export function TaskProvider({ children }) {
    let [ currentTask, setCurrentTask ] = useState("");
    let [ currentTaskIndex, setCurrentTaskIndex ] = useState(0);
    let [ tasks, setTasks ] = useState([]);

    function changeTask({ target }) {
        setCurrentTask(currentTask = target.value);
    }

    function incrementTask() {
        setCurrentTaskIndex(currentTaskIndex += 1);

        let tasksAdicionadas = tasks.concat({
            key: currentTaskIndex,
            tarefa: currentTask,
        });
        
        setTasks(tasksAdicionadas);

    }

    function removeTask(index) {
        let newTasks = tasks.filter(task => task.key !== index)
        setTasks(newTasks);
    }

    return (
        <TaskContext.Provider value={{ 
            tasks, 
            currentTask, 
            setCurrentTask, 
            currentTaskIndex, 
            setCurrentTaskIndex,
            changeTask, 
            incrementTask,
            removeTask
        }}>
            { children }
        </TaskContext.Provider>
    );
}

export function useTasks() {
    return useContext(TaskContext);
}