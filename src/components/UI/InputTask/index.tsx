import { useTasks } from '../../../contexts/TaskContext';

import styles from './styles.module.css';

export default function InputTask() {
    let { currentTask, changeTask } = useTasks();

    return (
        <div id={styles.areaInput}>
            <input 
                id={styles.input} 
                type="text" 
                placeholder="Digite aqui a sua tarefa"
                value={currentTask}
                onChange={e => changeTask(e)}
            />
        </div>
    );
}