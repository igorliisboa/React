import styles from './Lista.module.css'

function Lista(){
    return(
        <>
            <h3>Lista</h3>
            <ul className={styles.lista}>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
                <li>Sit</li>
                <li>Amet</li>
            </ul>
        </>
    )
}

export default Lista