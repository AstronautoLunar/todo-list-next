import { useState } from 'react';

import styles from './styles.module.css';

export default function ButtonOptionsTask() {
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
                    className={styles.option}
                    // style={

                    // }
                >

                </div>
                :
                <div
                    className={styles.option}
                >

                </div>
            }
        </>
    )
}