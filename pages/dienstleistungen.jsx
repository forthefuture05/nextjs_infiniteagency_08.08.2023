import Main from '@/src/Main'
import Head from 'next/head'
import React from 'react'
import styles from "@/styles/Dienstleistungen.module.css"
import BlueButton from '@/src/small/BlueButton'
import Image from 'next/image'
import Link from 'next/link'
import Kontakt from '@/src/big/Kontakt/Kontakt'

export default function dienstleistungen() {
    return (
        <>
            <Head>
                <title>Infinite Agency</title>
                <meta name="description" content="Eine Website by Infinite Agency" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/Infinite-Logo-Icon.svg" />
            </Head>

            <Main>
                <div className={styles.header}>
                    <div className={styles.image}></div>
                </div>

                <div className={styles.leistung}>
                    <h1>Wir bieten 3 verschiedene <br /> Leistungspakete</h1>

                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <div className={styles.zeit}>
                                <p>1 Woche</p>
                            </div>

                            <div className={styles.txt}>
                                <div className={styles.inner}>
                                    <h3>One-Page Website / Landingpage</h3>
                                    <p>Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet.</p>
                                </div>

                                <div className={styles.link}>
                                    <BlueButton href="#" small>Ansehen</BlueButton>
                                </div>
                            </div>
                        </div>

                        <div className={styles.box}>
                            <div className={styles.zeit}>
                                <p>1 Woche</p>
                            </div>

                            <div className={styles.txt}>
                                <div className={styles.inner}>
                                    <h3>One-Page Website / Landingpage</h3>
                                    <p>Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet.</p>
                                </div>

                                <div className={styles.link}>
                                    <BlueButton href="#" small>Ansehen</BlueButton>
                                </div>
                            </div>
                        </div>

                        <div className={styles.box}>
                            <div className={styles.zeit}>
                                <p>1 Woche</p>
                            </div>

                            <div className={styles.txt}>
                                <div className={styles.inner}>
                                    <h3>One-Page Website / Landingpage</h3>
                                    <p>Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet.</p>
                                </div>

                                <div className={styles.link}>
                                    <BlueButton href="#" small>Ansehen</BlueButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.paket}>
                    <div className={styles.top}>
                        <h2>One-Page Website/ <br /> Landingpage</h2>

                        <ul className={styles.details}>
                            <li><b>Dauer:</b> 1 Woche</li>
                            <li><b>Invesition:</b> ab 350 €</li>
                        </ul>
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.left}>
                            <div className={styles.content}>
                                <div className={styles.txt}>
                                    <h3>Zu wem passt das Angebot?</h3>
                                    <p>Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet.
                                        Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet. Entwicklung einer einzigartigen Markenidentität. <br /><br /> Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet.</p>
                                </div>

                                <div className={styles.list}>
                                    <h3>Das ist enthalten?</h3>
                                    <ul>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> 30 Minuten Video-Call</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> eine Landingpage/Homepage</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> rechtliche Seiten & Kontaktseite inbegriffen</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> Figma & Webflow</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> 2 Überarbeitungen</li>
                                        <li><Image src="/images/unchecked.svg" width={36} height={36} /> kein Branding</li>
                                        <li><Image src="/images/unchecked.svg" width={36} height={36} /> Texte, Bilder etc. (es werden ausschließlich Ihre Bilder & Stockfotos verwendet)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.link}>
                                <BlueButton href="/kontakt"><span>Lass uns <u>loslegen</u></span></BlueButton>
                            </div>
                        </div>

                        <div className={styles.projekt} style={{ backgroundImage: "url('/images/Expertise-Branding-4.png')" }}>
                            <div className={styles.title}>
                                <h3>Hartmann Unternehmensberatung</h3>
                                <span>Landingpage</span>

                                <div className={styles.arrow}>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </div>
                            </div>

                            <Link href="/"></Link>
                        </div>
                    </div>
                </div>

                <div className={styles.paket}>
                    <div className={styles.top}>
                        <h2>One-Page Website/ <br /> Landingpage</h2>

                        <ul className={styles.details}>
                            <li><b>Dauer:</b> 1 Woche</li>
                            <li><b>Invesition:</b> ab 350 €</li>
                        </ul>
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.left}>
                            <div className={styles.content}>
                                <div className={styles.txt}>
                                    <h3>Zu wem passt das Angebot?</h3>
                                    <p>Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet.
                                        Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet. Entwicklung einer einzigartigen Markenidentität. <br /><br /> Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet.</p>
                                </div>

                                <div className={styles.list}>
                                    <h3>Das ist enthalten?</h3>
                                    <ul>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> 30 Minuten Video-Call</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> eine Landingpage/Homepage</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> rechtliche Seiten & Kontaktseite inbegriffen</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> Figma & Webflow</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> 2 Überarbeitungen</li>
                                        <li><Image src="/images/unchecked.svg" width={36} height={36} /> kein Branding</li>
                                        <li><Image src="/images/unchecked.svg" width={36} height={36} /> Texte, Bilder etc. (es werden ausschließlich Ihre Bilder & Stockfotos verwendet)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.link}>
                                <BlueButton href="/kontakt"><span>Lass uns <u>loslegen</u></span></BlueButton>
                            </div>
                        </div>

                        <div className={styles.projekt} style={{ backgroundImage: "url('/images/Expertise-Branding-4.png')" }}>
                            <div className={styles.title}>
                                <h3>Hartmann Unternehmensberatung</h3>
                                <span>Landingpage</span>

                                <div className={styles.arrow}>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </div>
                            </div>

                            <Link href="/"></Link>
                        </div>
                    </div>
                </div>

                <div className={`${styles.paket} ${styles.last}`}>
                    <div className={styles.top}>
                        <h2>One-Page Website/ <br /> Landingpage</h2>

                        <ul className={styles.details}>
                            <li><b>Dauer:</b> 1 Woche</li>
                            <li><b>Invesition:</b> ab 350 €</li>
                        </ul>
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.left}>
                            <div className={styles.content}>
                                <div className={styles.txt}>
                                    <h3>Zu wem passt das Angebot?</h3>
                                    <p>Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet.
                                        Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet. Entwicklung einer einzigartigen Markenidentität. <br /><br /> Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet.</p>
                                </div>

                                <div className={styles.list}>
                                    <h3>Das ist enthalten?</h3>
                                    <ul>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> 30 Minuten Video-Call</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> eine Landingpage/Homepage</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> rechtliche Seiten & Kontaktseite inbegriffen</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> Figma & Webflow</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> 2 Überarbeitungen</li>
                                        <li><Image src="/images/unchecked.svg" width={36} height={36} /> kein Branding</li>
                                        <li><Image src="/images/unchecked.svg" width={36} height={36} /> Texte, Bilder etc. (es werden ausschließlich Ihre Bilder & Stockfotos verwendet)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.link}>
                                <BlueButton href="/kontakt"><span>Lass uns <u>loslegen</u></span></BlueButton>
                            </div>
                        </div>

                        <div className={styles.projekt} style={{ backgroundImage: "url('/images/Expertise-Branding-4.png')" }}>
                            <div className={styles.title}>
                                <h3>Hartmann Unternehmensberatung</h3>
                                <span>Landingpage</span>

                                <div className={styles.arrow}>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </div>
                            </div>

                            <Link href="/"></Link>
                        </div>
                    </div>
                </div>

                <div className={`${styles.blackBox} ${styles.sec}`}>
                    <div className={styles.inside}>
                        {/* Unsere Expertise */}

                        <div className={styles.prozess}>
                            <div className={styles.topSec}>
                                <h2>Unsere Expertise</h2>
                                <p>Mit fundierter Expertise beherrschen wir die Bereiche Branding, Webdesign und Webentwicklung, um maßgeschneiderte Lösungen für Ihr Unternehmen zu schaffen.</p>
                            </div>

                            <div className={styles.main}>
                                <div className={styles.box}>
                                    <span>1</span>

                                    <div className={styles.txt}>
                                        <h3>Analyse</h3>
                                        <p>Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet.</p>
                                    </div>
                                </div>

                                <div className={styles.box}>
                                    <span>2</span>

                                    <div className={styles.txt}>
                                        <h3>Strategie</h3>
                                        <p>Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet.</p>
                                    </div>
                                </div>

                                <div className={styles.box}>
                                    <span>3</span>

                                    <div className={styles.txt}>
                                        <h3>Design & Entwicklung</h3>
                                        <p>Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet.</p>
                                    </div>
                                </div>

                                <div className={styles.box}>
                                    <span>4</span>

                                    <div className={styles.txt}>
                                        <h3>Launch</h3>
                                        <p>Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet.</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.links}>
                                <BlueButton href="/kontakt">Lerne uns kennen</BlueButton>
                                <Link href="/dienstleistungen" className={styles.services}>Unsere Services</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Kontakt />
            </Main>
        </>
    )
}
