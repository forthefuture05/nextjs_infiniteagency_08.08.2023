import Link from 'next/link'
import React from 'react'
import styles from "@/src/small/smallComp.module.css"

const BlueButton = props => {
    return (
        <div className={`${styles.blueButton} ${props.small ? styles.small : ""} ${props.black ? styles.black : ""} ${props.white ? styles.white : ""}`}>
            <Link href={props.href} target={props.blank ? "_blank" : "_self"}>{props.children} <ion-icon name="arrow-forward-outline"></ion-icon></Link>
        </div>
    )
}

export default BlueButton