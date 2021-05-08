import styles from './styles.module.css';

export default function Header() {
    const data = new Date().toDateString();

    return (
        <header id={styles.header} role="header">
            <h1 id={styles.titleData}>
                { `${data}` }
            </h1>
        </header>
    );
}