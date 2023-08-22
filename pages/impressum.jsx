import Main from '@/src/Main'
import P from '@/src/small/P'
import PaddingContainer from '@/src/small/PaddingContainer'
import Title from '@/src/small/Title'
import Head from 'next/head'
import React from 'react'
import styles from "../styles/Impressum.module.css"
import Link from 'next/link'

export default function impressum() {
    return <>
        <Head>
            <title>Impressum | Infinite Agency</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />


        </Head>

        <Main>
            <PaddingContainer className={styles.impressum}>
                <h1>Impressum</h1>
                <div>
                    <ul>
                        <li className={styles.agency}>Infinite Agency</li>
                        <li>Patrik Valentin Sandu</li>
                        <li>Josef-Schlichtstr. 22</li>
                        <li>81245, München</li>
                    </ul>

                    <ul>
                        <li>Mobil. +49 174 7865074</li>
                        <li>E-Mail. kontakt@infiniteagency.de</li>
                        <li>Web. www.infiniteagency.de</li>
                    </ul>

                    <ul>
                        <li>St-Nr. 146/184/30171</li>
                    </ul>

                    <ul>
                        <li><Link href="/datenschutz">Zur Datenschutzerklärung</Link></li>
                    </ul>
                </div>
            </PaddingContainer>
        </Main>
    </>
}
