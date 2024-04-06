import React, { useState } from 'react'
import styles from "./Nav.module.css"
import Link from 'next/link'
import Image from 'next/image'
import BigMenu from '../BigMenu/BigMenu'

const Nav = () => {
    const [open, setOpen] = useState(false);

    return <>
        <div className={styles.navigation}>
            <div className={styles.image}>
                <Image src="/images/Infinite-Logo-Black.svg" width="210" height="54" />
                <Link href="/"></Link>
            </div>

            <div className={styles.links}>
                <ul>
                    <li>
                        <Link href="/">Startseite</Link>
                    </li>
                    <li>
                        <Link href="/dienstleistungen">Services</Link>
                    </li>
                    <li>
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li className={styles.special}>
                        <Link href="/kontakt">Kontakt <ion-icon name="arrow-forward-outline"></ion-icon></Link>
                    </li>
                </ul>

                <div className={styles.menu} onClick={() => { setOpen(before => { return !before }) }}>
                    <Image src="/images/menu.svg" width="21" height="15" />
                </div>
            </div>
        </div>

        <div className={styles.place}></div>

        {open && <BigMenu close={() => { setOpen(before => { return !before }) }} />}
    </>
}

export default Nav