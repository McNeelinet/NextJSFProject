import styles from '../styles/Home.module.css'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div>
                <h1>Контакты:</h1>
                <a href="https://t.me/McNeelinet" target="_blank"><img src={"/tg.png"}></img></a>
                <a href="https://vk.com/mcneelinet" target="_blank"><img src={"/vk.png"}></img></a>
            </div>
        </footer>
    )
}
