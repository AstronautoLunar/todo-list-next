import { ButtonTask, InputTask } from '../UI';

import styles from './styles.module.css';

export default function Footer() {

    return (
        <div id={styles.footer}>
            <ButtonTask/>
            <InputTask/>
        </div>
    );
}