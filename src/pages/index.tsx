import { useTasks } from '../contexts/TaskContext';

import { Task } from '../components/UI';

import styles from '../styles/Home.module.css';

export default function Home() {
  let { tasks } = useTasks();

  return (
    <main id={styles.main} role="main">
      {
        tasks.map(e => 
        <Task 
          key={e.key}
          descricao={e.tarefa} 
          index={e.key}
        />)
      }
    </main>
  )
}
