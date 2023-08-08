import React from 'react'
import styles from "./smallComponents.module.css"

const Title = props => {
    return (
        <div className={`${styles.title} ${props.className} ${props.white ? styles.white : ""} ${props.noCap ? styles.noCap : ""}`}>{props.children}</div>
    )
}

export default Title