import React from 'react'
import styles from "./BigMenu.module.css"
import Image from 'next/image'
import Link from 'next/link'

const BigMenu = props => {
    return (
        <div className={styles.bigMenu}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Image src="/images/infiniteBigLogo.png" width="316" height="74" />
                </div>

                <div className={styles.social}>
                    <h3>Folgen Sie uns!</h3>

                    <ul>
                        <li><Link href="https://www.facebook.com/profile.php?id=61551061914917" target='_blank'>Facebook</Link></li>
                        <li><Link href="https://www.instagram.com/infiniteagencyde/" target='_blank'>Instagram</Link></li>
                        <li><Link href="https://www.linkedin.com/in/patrik-sandu-34619b274/" target='_blank'>LinkedIn</Link></li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <ul>
                        <li><Link href="/kontakt">Kontakt</Link></li>
                        <li><Link href="/impressum">Impressum</Link></li>
                        <li><Link href="/datenschutz">Datenschutz</Link></li>
                    </ul>
                </div>
            </div>

            <div className={styles.main}>
                <ul>
                    <li><Link href="/">Startseite</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/dienstleistungen">Services</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/kontakt">Kontakt</Link></li>
                </ul>
            </div>

            <div className={styles.right}>

                <div>
                    <h3>Wir sind nur eine Nachricht entfernt!</h3>
                    <ul className={styles.contactInfo}>
                        <li>+49 174 7865074</li>
                        <li>kontakt@infiniteagency.de</li>
                        <li>Josef-Schlichtstr. 22, <br />
                            81245 München</li>
                    </ul>
                </div>
            </div>

            <div className={styles.close} onClick={props.close}>
                <img src="/images/close.svg" />
            </div>
        </div>
    )
}

export default BigMenu