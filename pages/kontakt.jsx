import Main from '@/src/Main'
import ContactForm from '@/src/big/ContactForm/ContactForm'
import P from '@/src/small/P'
import PaddingContainer from '@/src/small/PaddingContainer'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import styles from "../styles/Kontakt.module.css"

export default function kontakt() {

    return <>
        <Head>
            <title>Kontakt | Infinite Agency</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
            
        </Head>

        <Main>
            <PaddingContainer className={styles.contact} outerClass={styles.contactOuter}>
                <div className={styles.top}>
                    <h2>Wir freuen Uns <br /> auf sie 👋</h2>

                    <div className={styles.text}>
                        <P>Wir freuen uns, von Ihnen zu hören und auf unsere Zusammenarbeit. Schreiben Sie uns oder rufen Sie an!</P>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <h3>Wir sind nur eine <br /> Nachricht entfernt!</h3>

                        <ul className={styles.contactInfo}>
                            <li>+49 174 7865074</li>
                            <li>hallo@infiniteagency.de</li>
                            <li>Josef-Schlichtstr. 22, <br />
                                81245 München</li>
                        </ul>
                    </div>

                    <div className={styles.right}>
                        <ContactForm />
                    </div>
                </div>
            </PaddingContainer>
        </Main>
    </>
}
