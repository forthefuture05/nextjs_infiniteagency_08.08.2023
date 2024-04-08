import React from 'react'
import styles from "@/styles/Blog.module.css"
import Head from 'next/head'
import Main from '@/src/Main'
import Link from 'next/link'
import Image from 'next/image'
import Kontakt from '@/src/big/Kontakt/Kontakt'

export default function blog(props) {
    const articles = props.articles;

    return <>
        <Head>
            <title>Unser Blog über Webdesign | Infinite Agency</title>
            <meta name="description" content="Entdecken Sie die Welt des Online-Marketings mit Infinite Agency. Wertvolle Einblicke, Tipps und Trends für Ihren digitalen Erfolg." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/images/Infinite-Logo-Icon.svg" />
        </Head>

        <Main>
            <div className={styles.blog}>
                <div className={styles.top}>
                    <h1>Unser Blog</h1>

                    <div className={styles.textBox}>
                        <p>Tauchen Sie ein in unsere Sammlung inspirierender Ideen und innovativer Ansätze für Webdesign, Webentwicklung, SEO und SMM.</p>
                    </div>
                </div>

                <div className={styles.posts}>
                    {articles.map(e => {
                        return <div key={e.id} className={styles.post}>
                            <div className={styles.image} style={{ backgroundImage: `url("${e.attributes.Bild.data.attributes.url}")` }}>
                                <Link href={`/blog/${e.attributes.Slug}`}></Link>
                            </div>

                            <span>{e.attributes.Category}. {new Date(e.attributes.publishedAt).toLocaleDateString("default", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric"
                            })}</span>

                            <h3>{e.attributes.Titel}</h3>

                            <div className={styles.link}>
                                Artikel lesen
                                <Link href={`/blog/${e.attributes.Slug}`}></Link>

                                <Image src="/images/arrowGrey.svg" width="12" height="13" />
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <Kontakt />
        </Main>
    </>
}

export async function getStaticProps() {
    const req = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts/?populate=Bild&sort=publishedAt:desc`)
    const res = await req.json();

    return {
        props: {
            articles: res.data,
        }
    }
}