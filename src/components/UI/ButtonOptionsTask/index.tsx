import { useState } from 'react';

import { useTasks } from '../../../contexts/TaskContext';

import styles from './styles.module.css';

type ButtonOptionsTaskData = {
    index: number;
}

export default function ButtonOptionsTask({ index }: ButtonOptionsTaskData) {
    let { removeTask } = useTasks();

    let [ option, setOption ] = useState(false);

    function handleOption() {
        setOption(!option);
    }

    return (
        <>
            <div 
                className={styles.buttonOptionsTask}
                onClick={handleOption}
            >
                <i 
                    className="fas fa-chevron-right"
                    style={
                        option
                        ?
                        { 
                            transform: "rotate(180deg)" 
                        }
                        :
                        { 
                            transform: "rotate(0deg)" 
                        }
                        
                    }
                ></i>
            </div>
            {
                option
                ?
                <div
                    className={styles.optionOpen}
                >
                    <i 
                        id={styles.trash} 
                        className="fas fa-trash"
                        onClick={() => removeTask(index)}
                    ></i>
                </div>
                :
                <div
                    className={styles.optionClose}
                />
            }
        </>
    )
}