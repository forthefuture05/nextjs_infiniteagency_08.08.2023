import Main from '@/src/Main'
import Kontakt from '@/src/big/Kontakt/Kontakt'
import Head from 'next/head'
import React from 'react'

export default function kontakt() {
    return (
        <>
            <Head>
                <title>Infinite Agency</title>
                <meta name="description" content="Eine Website by Infinite Agency" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/Infinite-Logo-Icon.svg" />
            </Head>

            <Main>
                <Kontakt />
            </Main>
        </>
    )
}
