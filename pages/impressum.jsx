import Main from '@/src/Main'
import P from '@/src/small/P'
import PaddingContainer from '@/src/small/PaddingContainer'
import Title from '@/src/small/Title'
import Head from 'next/head'
import React from 'react'

export default function impressum() {
    return <>
        <Head>
            <title>Impressum | Infinite Agency</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
            
        </Head>

        <Main>
            <PaddingContainer>
                <Title noCap>Impressum</Title>
                <ul>
                    <P li><b>Infinite Agency</b></P>
                    <P li>Adresse: Josef-Schlichtstr. 22, 81245 München.</P>
                    <P li>Telefon: +49 174 7865074</P>
                    <P li>E-Mail: infiniteagencyde@gmail.com</P>
                </ul>
            </PaddingContainer>
        </Main>
    </>
}
