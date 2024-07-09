import styles from './Loading.module.css'

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src="src/components/img/loading.svg" alt="loading" />
        </div>
    )
}

export default Loading