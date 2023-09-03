import React from 'react'
import styles from "../../styles/Portfolio.module.css"
import Head from 'next/head'
import Main from '@/src/Main'
import PaddingContainer from '@/src/small/PaddingContainer';
import Image from 'next/image';
import CTA from '@/src/small/CallToAction/CTA';
import Title from '@/src/small/Title';
import EditorJsTransformer from '@/src/big/EditorJsTransformer/EditorJsTransformer';
import CircleLink from '@/src/small/CircleLink';

export default function project(props) {
    const project = props.project.attributes;

    return <>
        <Head>
            <title>Case Study - {project.Name} | Infinite Agency</title>
            <meta name="description" content="Professionelles Webdesign, SEO & SMM für digitales Wachstum. Kreative Lösungen, die beeindrucken. Entdecken Sie unsere Agentur aus München." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Main>
            <div className={styles.sProject}>
                <PaddingContainer className={styles.top} outerClass={styles.topOuter}>
                    <h1>{project.Name}</h1>

                    <div className={styles.details}>
                        <div className={styles.innerCtn}>
                            <div>
                                <span>Kategorie</span>
                                <p>{project.Category}</p>
                            </div>
                            <div>
                                <span>Klient</span>
                                <p>{project.Client}</p>
                            </div>
                            <div>
                                <span>Beginn</span>
                                <p>{new Date(project.Start).toLocaleDateString("default", {
                                    month: "long",
                                    year: "numeric"
                                })}</p>
                            </div>
                            <div>
                                <span>Fertigstellung</span>
                                <p>{new Date(project.Fertigstellung).toLocaleDateString("default", {
                                    month: "long",
                                    year: "numeric"
                                })}</p>
                            </div>
                        </div>
                    </div>
                </PaddingContainer>

                <PaddingContainer className={styles.mockup} noTop>
                    <Image src={`${project.Mockup.data.attributes.url}`} width={project.Mockup.data.attributes.width} height={project.Mockup.data.attributes.height} />
                </PaddingContainer>

                <PaddingContainer className={styles.services} noTop>
                    <Title className={styles.title} noCap>Unsere Services für: {project.Name}</Title>

                    <div className={styles.ctn}>
                        <div className={styles.innerCtn}>
                            {project.Services.map(s => {
                                return <div className={styles.service}>
                                    <h3>{s.Titel}</h3>
                                    <EditorJsTransformer className={styles.inhalt} inhalt={JSON.parse(s.Beschreibung)} />
                                </div>
                            })}
                        </div>
                    </div>

                    {project.URL && <div className={styles.link}>
                        <CircleLink href={project.URL} blank>Website ansehen</CircleLink>
                    </div>}
                </PaddingContainer>

                <PaddingContainer className={styles.screenshot} noTop>
                    <div className={styles.center}>
                        <Image className={styles.screen} src={`${project.Screenshot.data.attributes.url}`} width={project.Screenshot.data.attributes.width} height={project.Screenshot.data.attributes.height} />
                    </div>

                    {project.URL && <div className={styles.link}>
                        <CircleLink href={project.URL} blank>Website ansehen</CircleLink>
                    </div>}
                </PaddingContainer>

                <CTA subTitle="Teamwork" href="/kontakt" link="Kontakt" noTop>Wir freuen uns auf eine <br /> Zusammenarbeit mit Ihnen!</CTA>
            </div>
        </Main>
    </>
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.STRAPI_URL}/api/projects`)
    const projects = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = projects.data.map((project) => ({
        params: { project: project.attributes.Slug }
    })).flat();

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    const slug = context.params.project;

    const res = await fetch(`${process.env.STRAPI_URL}/api/projects?filters[Slug][$eq]=${slug}&populate=Screenshot,Mockup,Services`)
    const project = await res.json();

    return {
        props: {
            project: project.data[0]
        }
    }
}