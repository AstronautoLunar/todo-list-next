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

    function changeTask(task) {
        setCurrentTask(currentTask = task.target.value);
    }

    // useEffect(() => {
    //     localStorage.clear();
    //     console.log(localStorage.length)
    // }, [])

    function incrementTask() {
        setCurrentTaskIndex(currentTaskIndex += 1);

        let tasksAdicionadas = tasks.concat({
            key: currentTaskIndex,
            tarefa: currentTask,
        });
        
        setTasks(tasks = tasksAdicionadas);

        // localStorage.setItem(String(currentTaskIndex), currentTask);
    }

    function removeTask(index) {
        let tarefa = tasks[index-1].tarefa
        tarefa.splice(index, 1);
    }

    // Não consegui apagar a tarefa

    console.log(tasks[0])

    // useEffect(() => {
    //     console.log(localStorage.key(1));
    // }, [])

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
            removeTask
        }}>
            { children }
        </TaskContext.Provider>
    );
}

export function useTasks() {
    return useContext(TaskContext);
}