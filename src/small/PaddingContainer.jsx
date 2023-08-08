import React from 'react'
import styles from "./smallComponents.module.css"

const PaddingContainer = props => {
    return (
        <div className={`${styles.paddingCtn} ${props.outerClass} ${props.noTop ? styles.noTop : ""}`}>
            <div className={`${styles.innerCtn} ${props.className}`}>
                {props.children}
            </div>
        </div>
    )
}

export default PaddingContainer