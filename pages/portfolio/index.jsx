import React from 'react'
import styles from "../../styles/Portfolio.module.css"
import Head from 'next/head'
import Main from '@/src/Main'
import SubTitle from '@/src/small/SubTitle'
import Title from '@/src/small/Title'
import CircleLink from '@/src/small/CircleLink'
import P from '@/src/small/P'
import PaddingContainer from '@/src/small/PaddingContainer'
import CTA from '@/src/small/CallToAction/CTA'
import Image from 'next/image'
import Link from 'next/link'

export default function portfolio(props) {
    const projects = props.projects;

    return <>
        <Head>
            <title>Portfolio | Infinite Agency</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
            
        </Head>

        <Main>
            <PaddingContainer className={styles.portfolio} outerClass={styles.portfolioOuter}>
                <div className={styles.left}>
                    <span className={styles.sub}>Unser</span>
                    <h2>Portfolio</h2>

                    <P>Entdecken Sie unsere vielfältigen Projekte und sehen Sie, wie wir unsere Kunden zum digitalen Erfolg geführt haben.</P>

                    <CircleLink href="/kontakt">Kontakt</CircleLink>
                </div>

                <div className={styles.right}>
                    {projects.map(e => {
                        return <div key={e.id} className={styles.project}>
                            <div className={styles.image} style={{ backgroundImage: `url("${e.attributes.Screenshot.data.attributes.url}")` }}><Link href={`/portfolio/${e.attributes.Slug}`}></Link></div>

                            <div className={styles.bottom}>
                                <div>
                                <h3>{e.attributes.Name}</h3>
                                <span>{new Date(e.attributes.Fertigstellung).toLocaleDateString("default", {
                                    month: "long",
                                    year: "numeric"
                                })}</span>
                                </div>

                                <div className={styles.arrow}>
                                    <Image src="/images/arrowUp.svg" width="22" height="22"/>
                                </div>

                                <Link href={`/portfolio/${e.attributes.Slug}`}></Link>
                            </div>
                        </div>
                    })}
                </div>
            </PaddingContainer>

            <CTA href="/kontakt" link="Lass uns reden" subTitle="Teamwork" noTop>
                Wir freuen uns auf eine <br />
                Zusammenarbeit mit Ihnen!
            </CTA>
        </Main>
    </>
}

export async function getStaticProps() {
    const req = await fetch(`${process.env.STRAPI_URL}/api/projects/?populate=Screenshot&sort=Fertigstellung:desc`)
    const res = await req.json();

    return {
        props: {
            projects: res.data,
        }
    }
}