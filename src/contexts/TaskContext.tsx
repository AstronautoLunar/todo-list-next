import { createContext, useContext, useState } from 'react';

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
}

const TaskContext = createContext({} as TaskContextData);

export function TaskProvider({ children }) {
    
    let [ currentTask, setCurrentTask ] = useState("");
    let [ currentTaskIndex, setCurrentTaskIndex ] = useState(0);
    let [ tasks, setTasks ] = useState([]);

    function changeTask(task) {
        setCurrentTask(currentTask = task.target.value);
    }
    
    function incrementTask() {
        setCurrentTaskIndex(currentTaskIndex += 1);
        
        let tasksAdicionadas = tasks.concat({
            key: currentTaskIndex,
            tarefa: currentTask,
        });

        setTasks(tasks = tasksAdicionadas);
    }

    // function changeCheckBox() {
        
    // }

    return (
        <TaskContext.Provider value={{ 
            tasks, 
            currentTask, 
            setCurrentTask, 
            currentTaskIndex, 
            setCurrentTaskIndex,
            changeTask, 
            incrementTask,
        }}>
            { children }
        </TaskContext.Provider>
    );
}

export function useTasks() {
    return useContext(TaskContext);
}