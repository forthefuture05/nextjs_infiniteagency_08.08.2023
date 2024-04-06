import React from 'react'
import styles from "./Footer.module.css"
import Link from 'next/link'

const Footer = () => {

    return (
        <div className={styles.footer}>
            <p>© 2024 | Alle Rechte vorbehalten <br /> von <b>Ininite Agency</b></p>

            <div className={styles.links}>
                <ul>
                    <li><Link href="/kontakt">Kontakt</Link></li>
                    <li><Link href="/impressum">Impressum</Link></li>
                    <li><Link href="/datenschutz">Datenschutzerklärung</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer