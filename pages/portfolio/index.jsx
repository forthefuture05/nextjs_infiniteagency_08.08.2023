import Main from '@/src/Main'
import Head from 'next/head'
import React from 'react'
import styles from "@/styles/Portfolio.module.css"
import Link from 'next/link'
import Kontakt from '@/src/big/Kontakt/Kontakt'

export default function index(props) {
    const projekte = props.projects;

    return (
        <>
            <Head>
                <title>Unsere Portfolio: Sehen Sie sich die Projekte von Infinite Agency an</title>
                <meta name="description" content="Entdecken Sie unser beeindruckendes Portfolio bei Infinite Agency. Wir bringen die Visionen kleiner Unternehmen online zum Leben." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/Infinite-Logo-Icon.svg" />
            </Head >

            <Main>
                <div className={styles.header}>
                    <div className={styles.img}></div>
                </div>

                <div className={styles.projekte}>
                    <h1>Unsere Projekte</h1>

                    <div className={styles.inner}>
                        {projekte.map(e => {
                            return <div key={e.id} className={styles.projekt}>
                                <div className={styles.image} style={{ backgroundImage: `url("${e.attributes.MockUpImage.data.attributes.url}")` }}><Link href={`/portfolio/${e.attributes.Slug}`}></Link></div>

                                <div className={styles.bottom}>
                                    <div>
                                        <h3>{e.attributes.Name}</h3>
                                        {/* <p>{new Date(e.attributes.Fertigstellung).toLocaleDateString("default", {
                                            month: "long",
                                            year: "numeric"
                                        })}</p> */}
                                        <p>{e.attributes.Category}</p>
                                    </div>

                                    <Link href={`/portfolio/${e.attributes.Slug}`}></Link>
                                </div>
                            </div>
                        })}
                    </div>
                </div>

                <Kontakt />
            </Main>
        </>
    )
}

export async function getStaticProps() {
    const req = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects/?populate=MockUpImage&sort=Fertigstellung:desc`)
    const res = await req.json();

    return {
        props: {
            projects: res.data,
        }
    }
}