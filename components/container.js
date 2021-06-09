import styles from '../styles/Home.module.css'

export default function Article({children}) {
    return(
        <>
            <div className={styles.container}>
                {children}
            </div>
        </>
    )
}