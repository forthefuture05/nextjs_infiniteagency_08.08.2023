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
                <Image src="/images/infiniteBigLogoBlack.png" width="221" height="56" />
                <Link href="/"></Link>
            </div>

            <div className={styles.links}>
                <ul>
                    <li>
                        <Link href="/">Startseite</Link>
                    </li>
                    <li>
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/dienstleistungen">Services +</Link>
                        <ul>
                            <div>
                                <li><Link href="/dienstleistungen/webdesign">Webdesign</Link></li>
                                <li><Link href="/dienstleistungen/webentwicklung">Web-Entwicklung</Link></li>
                                <li><Link href="/dienstleistungen/seo">SEO</Link></li>
                                <li><Link href="/dienstleistungen/social-media-marketing">SMM</Link></li>
                            </div>
                        </ul>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/kontakt">Kontakt</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.menu} onClick={() => { setOpen(before => { return !before }) }}>
                <Image src="/images/menu.svg" width="21" height="15" />
            </div>
        </div>

        <div className={styles.place}></div>

        {open && <BigMenu close={() => { setOpen(before => { return !before }) }} />}
    </>
}

export default Nav