import { useState } from 'react';

import ButtonOptionsTask from '../ButtonOptionsTask';

import { useTasks } from '../../../contexts/TaskContext';

import styles from './styles.module.css';

export default function Task({ index, descricao }) {
    let [ selected, setSelected ] = useState(false);
    let [ styleTask, setStyleTask ] = useState("noSelected")
    
    function selectedCheckBox() {
        setSelected(!selected);
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
                selected
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
            <span 
                className={styles[styleTask]}
                style={
                    selected
                    ?
                    {
                        textDecoration: 'line-through',
                    }
                    :
                    {
                        textDecoration: 'none',
                    }
                }
            >
                    { descricao }
            </span>
            <ButtonOptionsTask index={index}/>
        </div>
    )
}