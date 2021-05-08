import { useTasks } from '../../../contexts/TaskContext';

import styles from './styles.module.css';

export default function ButtonTask() {
    let { incrementTask } = useTasks();
    
    return (
        <div id={styles.button}>
            <img 
                src="/addTaskIcon.svg" 
                alt="icon increment task"
                onClick={() => incrementTask()}
            />
        </div>
    );
}