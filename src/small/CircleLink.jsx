import React from 'react'
import styles from "./smallComponents.module.css"
import Image from 'next/image'

const CircleLink = props => {
    return (
        <div className={`${styles.circleLink} ${props.white ? styles.white : ""}`}>
            <div className={styles.innerCtn}>
                <span>{props.children}</span>

                <div className={styles.icon}>
                    <Image className={styles.black} src="/images/arrowUp.svg" width="12" height="12" />
                    <Image className={styles.white} src="/images/arrowUpWhite.svg" width="12" height="12" />
                </div>
            </div>

            <a href={props.href}></a>
        </div>
    )
}

export default CircleLink