import React from 'react'
import styles from "./smallComponents.module.css"

const P = props => {
    return <>
        {props.li ? <li className={styles.p}>{props.children}</li> : <p className={styles.p}>{props.children}</p>}
    </>
}

export default P