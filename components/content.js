import styles from '../styles/Home.module.css'

export default function Content({children}) {
    return(
        <>
            <div className={styles.content}>
                {children}
            </div>
        </>
    )
}