import React from 'react'
import styles from "../../styles/Blog.module.css"
import Main from '@/src/Main'
import Head from 'next/head'
import PaddingContainer from '@/src/small/PaddingContainer';
import EditorJsTransformer from '@/src/big/EditorJsTransformer/EditorJsTransformer';
import Title from '@/src/small/Title';
import Link from 'next/link';
import Image from 'next/image';
import CTA from '@/src/small/CallToAction/CTA';

export default function post(props) {
    const articles = props.posts;
    const post = props.post.attributes;
    const inhalt = JSON.parse(post.Inhalt);

    return <>
        <Head>
            <title>{post.Titel}</title>
            <meta name="description" content={post.Description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
            
        </Head>

        <Main>
            <PaddingContainer className={styles.bigPost} outerClass={styles.bigPostOuter}>
                <div className={styles.inside}>
                    <div className={styles.info1}>
                        <span className={styles.cat}>{post.Category}</span>
                        <div></div>
                        <span className={styles.date}>{new Date(post.publishedAt).toLocaleDateString("default", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric"
                        })}</span>
                    </div>

                    <h1>{post.Titel}</h1>

                    <div className={styles.info2}>
                        <div className={styles.box}>
                            <div>Von</div>
                            <span>Infinite Agency</span>
                        </div>
                        <div className={styles.box}>
                            <div>Lesedauer</div>
                            <span>{post.Lesedauer} Min</span>
                        </div>
                    </div>
                </div>

                <div className={styles.image} style={{ backgroundImage: `url("${post.Bild.data.attributes.url}")` }}></div>

                <div className={styles.inside}>
                    <EditorJsTransformer inhalt={inhalt} />
                </div>
            </PaddingContainer>

            <PaddingContainer className={styles.blog} outerClass={styles.relatedOuter}>
                <Title className={styles.title}>Das könnte Sie auch interessieren</Title>
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
            </PaddingContainer>

            <CTA href="/kontakt" link="Kontakt" subTitle="Beratung" noTop>Sie haben Fragen bezüglich Online Marketing? <br /> Wir beraten Sie gerne!</CTA>
        </Main>
    </>
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.STRAPI_URL}/api/posts`)
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.data.map((post) => ({
        params: { slug: post.attributes.Slug }
    })).flat();

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    const slug = context.params.slug;

    const resP = await fetch(`${process.env.STRAPI_URL}/api/posts?filters[Slug][$eq]=${slug}&populate=Bild`)
    const post = await resP.json();

    const req = await fetch(`${process.env.STRAPI_URL}/api/posts/?populate=Bild&sort=publishedAt:desc&pagination[limit]=3`)
    const res = await req.json();

    return {
        props: {
            post: post.data[0],
            posts: res.data
        }
    }
}