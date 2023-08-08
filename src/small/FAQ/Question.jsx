import React, {useState} from 'react'
import styles from "./Faq.module.css"

const Question = (props) => {
    const [show, setShow] = useState(false)

    return (
        <div className={`${styles.question} ${styles[`${show ? "active" : "passive"}`]}`}>
            <div className={styles.nav} onClick={() => setShow(prev => {return !prev})}>
                <h3>{props.question}</h3>
                <div className={styles.btn}>
                    <span>+</span>
                </div>
            </div>
            <div className={styles.content}>
                <p>
                    {props.children}
                </p>
            </div>
        </div>
    )
}

export default Question