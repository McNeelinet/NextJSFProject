import styles from '../styles/Home.module.css'

export default function Header() {
    return(
        <header className={styles.header}>
            <h1>Название сайта</h1>
                <nav>
                    <ul>
                        <li className={styles.left}><a href="/">Главная</a></li>
                        <li className={styles.left}><a href="/revievs">Обзоры</a></li>
                    </ul>
                </nav>
        </header>
    )
}