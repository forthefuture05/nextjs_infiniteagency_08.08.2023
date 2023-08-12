import React from 'react'
import styles from "../styles/Home.module.css"
import Head from 'next/head'
import Main from '@/src/Main'
import Image from 'next/image'
import CircleLink from '@/src/small/CircleLink'
import PaddingContainer from '@/src/small/PaddingContainer'
import SubTitle from '@/src/small/SubTitle'
import Title from '@/src/small/Title'
import P from '@/src/small/P'
import ContactForm from '@/src/big/ContactForm/ContactForm'
import Link from 'next/link'

export default function home(props) {
    const projects = props.projects;
    const posts = props.posts;

    return <>
        <Head>
            <title>Moderne Online Marketing Agentur aus München | Infinite Agency</title>
            <meta name="description" content="Professionelles Webdesign, SEO & SMM für digitales Wachstum. Kreative Lösungen, die beeindrucken. Entdecken Sie unsere Agentur aus München." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />


        </Head>

        <Main>
            <div className={styles.hero}>
                <div className={styles.innerCtn}>
                    <span className={styles.span1}>Online</span>
                    <span className={styles.title1}>Mark</span>
                    <div className={styles.title2}>
                        <div>
                            <p>Entdecke innovative Online-Marketing-Taktiken und bewährte Methoden, die dein Unternehmen zum Erfolg führen. Wir sind bereit, dich auf deinem digitalen Wachstumsweg zu begleiten!</p>
                        </div>
                        <span>eting</span>
                    </div>
                    <div className={styles.span2}>
                        <span>in München</span>
                    </div>

                    <div className={styles.paragraph}>
                        <p>Entdecke innovative Online-Marketing-Taktiken und bewährte Methoden, die dein Unternehmen zum Erfolg führen. Wir sind bereit, dich auf deinem digitalen Wachstumsweg zu begleiten!</p>
                    </div>

                    <Image className={styles.scroll} src="/images/scroll.svg" width="40" height="80" />
                </div>

                <Image className={styles.designIcon} src="/images/ellipseIcon.svg" width="226" height="452" />

                <div className={styles.imageCtn}>
                    <div className={styles.image}></div>
                </div>
            </div>


            <PaddingContainer className={styles.about} outerClass={styles.aboutOuter}>
                <div className={styles.image}></div>

                <div className={styles.content}>
                    <div className={styles.innerCtn}>
                        <SubTitle white>Wer wir sind</SubTitle>
                        <Title className={styles.title} white>Wir kämpfen für <br /> Ihren digitalen <br /> Erfolg</Title>

                        <div className={styles.textBox}>
                            <div className={styles.innerBox}>
                                <P>Wir sind ein Team von leidenschaftlichen digitalen Experten, das sich zum Ziel gesetzt hat, die Online-Präsenz Ihres Unternehmens zu stärken! Mit jahrelanger Erfahrung im Online-Marketing entwickeln wir maßgeschneiderte und innovative Lösungen für Ihren Online-Erfolg. Gemeinsam navigieren wir Ihr Unternehmen erfolgreich in die digitale Zukunft!</P>

                                <div className={styles.link}>
                                    <CircleLink href="/kontakt" white>Kontakt</CircleLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PaddingContainer>

            <PaddingContainer className={styles.services} outerClass={styles.servicesOuter}>
                <div className={styles.top}>
                    <div className={styles.titles}>
                        <SubTitle>Services</SubTitle>
                        <Title>Unsere Marketing <br /> Services</Title>
                    </div>

                    <div className={styles.textBox}>
                        <P>Wir bieten eine Vielzahl von speziell angepassten digitalen Marketingdienstleistungen, um Ihr Unternehmen auf die nächste Stufe zu bringen. Lassen Sie uns Ihnen helfen, Ihre digitale Präsenz zu stärken und Ihr Unternehmen zu transformieren.</P>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.servicesBox}>
                        <div className={styles.left}>
                            <h3>Webdesign <br /> UI/UX Design</h3>
                        </div>

                        <div className={styles.main}>
                            <P>Unsere Webdesigner und -entwickler erstellen attraktive, benutzerfreundliche und SEO-optimierte Websites, die Ihre Online-Präsenz verbessern und den Umsatz steigern.</P>

                            <ul>
                                <P li>Kreative Gestaltung</P>
                                <P li>Nutzerzentrierter Ansatz</P>
                                <P li>Branding Intergration</P>
                            </ul>
                        </div>

                        <div className={styles.right}>
                            <CircleLink href="/dienstleistungen/webdesign">Details</CircleLink>
                        </div>
                    </div>

                    <div className={styles.servicesBox}>
                        <div className={styles.left}>
                            <h3>Web- <br /> Entwicklung</h3>
                        </div>

                        <div className={styles.main}>
                            <P>Unsere Webentwicklung schafft leistungsstarke Websites, die nahtlos funktionieren und Ihr Unternehmen erfolgreich im digitalen Raum präsentieren.</P>

                            <ul>
                                <P li>Technische Gestaltung</P>
                                <P li>CMS-Systeme</P>
                                <P li>Maßgeschneiderte Lösungen</P>
                            </ul>
                        </div>

                        <div className={styles.right}>
                            <CircleLink href="/dienstleistungen/webentwicklung">Details</CircleLink>
                        </div>
                    </div>

                    <div className={styles.servicesBox}>
                        <div className={styles.left}>
                            <h3>Suchmaschinen- <br /> Optimierung</h3>
                        </div>

                        <div className={styles.main}>
                            <P>Unser Team von SEO-Spezialisten wird Ihre Website optimieren, um eine bessere Suchmaschinenplatzierung zu erreichen und den organischen Traffic zu erhöhen.</P>

                            <ul>
                                <P li>Gezielte Keyword-Strategien</P>
                                <P li>Nachhaltiger Erfolg</P>
                                <P li>On-Page -, Off-Page - und Technical SEO</P>
                            </ul>
                        </div>

                        <div className={styles.right}>
                            <CircleLink href="/dienstleistungen/seo">Details</CircleLink>
                        </div>
                    </div>

                    <div className={styles.servicesBox}>
                        <div className={styles.left}>
                            <h3>Social Media <br /> Marketing</h3>
                        </div>

                        <div className={styles.main}>
                            <P>Wir erstellen und implementieren effektive Social Media Strategien, um Ihre Markenbekanntheit zu erhöhen und eine engagierte Community aufzubauen.</P>

                            <ul>
                                <P li>Zielgruppenorientiertes Engagement</P>
                                <P li>Wachstumsstrategien</P>
                                <P li>Authentizität und Relevanz</P>
                            </ul>
                        </div>

                        <div className={styles.right}>
                            <CircleLink href="/dienstleistungen/social-media-marketing">Details</CircleLink>
                        </div>
                    </div>
                </div>
            </PaddingContainer>

            <PaddingContainer className={styles.portfolio} outerClass={styles.portfolioOuter}>
                <div className={styles.left}>
                    <div className={styles.innerCtn}>
                        <div>
                            <SubTitle bubble>Portfolio</SubTitle>
                            <Title>Unsere Lieblings- <br />aufträge</Title>
                            <P>Hier sind einige unserer Lieblingsprojekte, die wir kürzlich abgeschlossen haben!</P>
                        </div>

                        <div className={styles.link}>
                            <CircleLink href="/portfolio">Alle ansehen</CircleLink>
                        </div>
                    </div>
                </div>

                {projects.map(e => {
                    return <div key={e.id} className={styles.project}>
                        <div className={styles.top}>
                            <h3>{e.attributes.Name}</h3>
                            <span>{new Date(e.attributes.Fertigstellung).toLocaleDateString("default", {
                                month: "long",
                                year: "numeric"
                            })}</span>
                        </div>

                        <div className={styles.image} style={{ backgroundImage: `url("${e.attributes.Screenshot.data.attributes.url}")` }}></div>
                    </div>
                })}

                <div className={styles.projectsMini}>
                    {projects.map(e => {
                        return <div key={e.id} className={styles.project}>
                            <div className={styles.image} style={{ backgroundImage: `url("${e.attributes.Screenshot.data.attributes.url}")` }}></div>
                            <div className={styles.top}>
                                <h3>{e.attributes.Name}</h3>
                                <span>{new Date(e.attributes.Fertigstellung).toLocaleDateString("default", {
                                    month: "long",
                                    year: "numeric"
                                })}</span>
                            </div>
                        </div>
                    })}
                </div>

                <div className={styles.linkMini}>
                    <CircleLink href="/portfolio">Alle ansehen</CircleLink>
                </div>
            </PaddingContainer>

            <PaddingContainer className={styles.blog} outerClass={styles.blogOuter}>
                <div className={styles.top}>
                    <Title white>Unser <br /> Blog</Title>

                    <div className={styles.pBox}>
                        <P>Bleiben Sie informiert und entdecken Sie wertvolle Ressourcen rund um Online-Marketing, Webdesign und digitale Trends.</P>
                    </div>

                    <div className={styles.link}>
                        <CircleLink href="/blog" white>Sieh alle Artikel</CircleLink>
                    </div>
                </div>


                <div className={styles.posts}>
                    {posts.map(e => {
                        return <div key={e.id} className={styles.post}>
                            <div className={styles.image} style={{ backgroundImage: `url("${e.attributes.Bild.data.attributes.url}")` }}>
                                <Link href={`/blog/${e.attributes.Slug}`}></Link>
                            </div>

                            <span>{e.attributes.Category}. {new Date(e.attributes.publishedAt).toLocaleDateString("default", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric"
                            })}</span>

                            <h3><Link href={`/blog/${e.attributes.Slug}`}>{e.attributes.Titel}</Link></h3>
                        </div>
                    })}
                </div>

                <div className={styles.linkMini}>
                    <CircleLink href="/blog" white>Sieh alle Artikel</CircleLink>
                </div>
            </PaddingContainer>

            <PaddingContainer className={styles.contact} outerClass={styles.contactOuter}>
                <div className={styles.top}>
                    <h2>Wir freuen Uns <br /> auf sie 🤟</h2>

                    <div className={styles.text}>
                        <P>Großartig! Wir freuen uns, von Ihnen zu hören und auf unsere Zusammenarbeit. Schreiben Sie uns oder rufen Sie an!</P>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <div>
                            <h3>Wir sind nur eine <br /> Nachricht entfernt!</h3>

                            <ul className={styles.contactInfo}>
                                <li>+49 174 7865074</li>
                                <li>infiniteagencyde@gmail.com</li>
                            </ul>
                        </div>

                        <div>
                            <span>Follow</span>

                            <ul className={styles.social}>
                                <li><Link href="https://www.facebook.com/profile.php?id=100092458055231" target='_blank'>Facebook</Link></li>
                                <li><Link href="https://www.instagram.com/infiniteagencyde/" target='_blank'>Instagram</Link></li>
                                <li><Link href="https://www.linkedin.com/in/patrik-sandu-34619b274/" target='_blank'>LinkedIn</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <ContactForm />
                    </div>
                </div>
            </PaddingContainer>
        </Main >
    </>
}

export async function getStaticProps() {
    const req = await fetch(`${process.env.STRAPI_URL}/api/projects/?populate=Screenshot&pagination[limit]=2&sort=Fertigstellung:desc`);
    const res = await req.json();

    const req2 = await fetch(`${process.env.STRAPI_URL}/api/posts/?populate=Bild&pagination[limit]=3&sort=publishedAt:desc`);
    const res2 = await req2.json();

    return {
        props: {
            projects: res.data,
            posts: res2.data
        }
    }
}
