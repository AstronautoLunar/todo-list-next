import { useState } from 'react';

import { useTasks } from '../../../contexts/TaskContext';

import styles from './styles.module.css';

export default function Task({ index, descricao }) {
    let [ checkBoxSelected, setCheckBoxSelected ] = useState(false);
    let [ styleTask, setStyleTask ] = useState("noSelected")
    let { removeTask } = useTasks();
    
    function selectedCheckBox() {
        setCheckBoxSelected(checkBoxSelected = !checkBoxSelected);
        setStyleTask(
            styleTask === "noSelected"
            ?
            styleTask = "selected"
            :
            styleTask = "noSelected"
        )
    }

    return (
        <div 
            id={styles.task}
            className={styles[styleTask]}
        >
            {
                checkBoxSelected
                ?
                <img 
                    className={styles.image} 
                    src="/checkboxSelectedIcon.svg" alt="Checkbox selected"
                    onClick={() => selectedCheckBox()}
                />
                :
                <img
                    className={styles.image} 
                    src="/checkboxNoSelectedIcon.svg" alt="Checkbox no selected"
                    onClick={() => selectedCheckBox()}
                />
            }
            <span className={styles[styleTask]}>{ descricao }</span>
            <button 
                onClick={() => {removeTask(index);}}
            >Apagar</button>
        </div>
    )
}