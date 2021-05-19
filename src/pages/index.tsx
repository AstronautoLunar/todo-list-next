import { useTasks } from '../contexts/TaskContext';

import { Task } from '../components/UI';

import styles from '../styles/Home.module.css';

export default function Home() {
  let { tasks } = useTasks();
  // let storage = localStorage;

  // let keys = [];
  // let tasksStringStorage = [];
  // let tasksStorage = [];

  // for(let i = 0; i < localStorage.length; i++) {
  //   keys.push(Number(localStorage.key(i)));
  // }

  // keys.sort();

  // for(let i = 0; i < localStorage.length; i++) {
  //   tasksStringStorage.push(localStorage.getItem(String(i)));
  // }

  // for(let i = 0; i < localStorage.length; i++) {
  //   tasksStorage.push({
  //     key: keys[i],
  //     tarefa: tasksStringStorage[i]
  //   });
  // };

  // console.log(tasksStorage);


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
