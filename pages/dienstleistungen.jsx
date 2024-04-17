import Main from '@/src/Main'
import Head from 'next/head'
import React from 'react'
import styles from "@/styles/Dienstleistungen.module.css"
import BlueButton from '@/src/small/BlueButton'
import Image from 'next/image'
import Link from 'next/link'
import Kontakt from '@/src/big/Kontakt/Kontakt'

export default function dienstleistungen() {
    return (
        <>
            <Head>
                <title>Unsere Dienstleistungen: Webdesign-Lösungen für Ihren Erfolg</title>
                <meta name="description" content="Erfahren Sie, wie Infinite Agency kleinen Unternehmen hilft, online erfolgreich zu werden. Entdecken Sie unsere Dienstleistungen für Ihre digitale Präsenz." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/Infinite-Logo-Icon.svg" />
            </Head>

            <Main>
                <div className={styles.header}>
                    <div className={styles.image}></div>
                </div>

                <div className={styles.leistung}>
                    <h1>Wir bieten 3 verschiedene <br /> Leistungspakete</h1>

                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <div className={styles.zeit}>
                                <p>1 Seite</p>
                            </div>

                            <div className={styles.txt}>
                                <div className={styles.inner}>
                                    <h3>One-Page Website / Landingpage</h3>
                                    <p>Unsere One-Page Website ist perfekt für kleine lokale Unternehmen wie Friseursalons oder Cafés, die eine einfache und fokussierte Online-Präsenz benötigen, um ihre Dienstleistungen schnell und effektiv zu präsentieren.</p>
                                </div>

                                <div className={styles.link}>
                                    <BlueButton href="#landingpage-paket" small>Ansehen</BlueButton>
                                </div>
                            </div>
                        </div>

                        <div className={styles.box}>
                            <div className={styles.zeit}>
                                <p>3 Seiten</p>
                            </div>

                            <div className={styles.txt}>
                                <div className={styles.inner}>
                                    <h3>Starter Website</h3>
                                    <p>Dieses Website-Paket mit 3 Seiten ist ideal für Unternehmen, die mehr Platz für Informationen benötigen, wie einer Über uns- oder einer Dienstleistungsseite, um professionell und umfassend präsentiert zu werden.</p>
                                </div>

                                <div className={styles.link}>
                                    <BlueButton href="#starter-paket" small>Ansehen</BlueButton>
                                </div>
                            </div>
                        </div>

                        <div className={styles.box}>
                            <div className={styles.zeit}>
                                <p>5 Seiten</p>
                            </div>

                            <div className={styles.txt}>
                                <div className={styles.inner}>
                                    <h3>Unternehmens- <br /> Website</h3>
                                    <p>Mit 5 Seiten und einem integriertem Content-Management-System ist die Unternehmenswebsite eine optimale Lösung für Unternehmen mit hoher Online-Konkurrenz, wie Handwerker, Anwälte oder Zahnärzte, die ihre Online-Präsenz maximieren möchten.</p>
                                </div>

                                <div className={styles.link}>
                                    <BlueButton href="#unternehmen-paket" small>Ansehen</BlueButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.paket} id='landingpage-paket'>
                    <div className={styles.top}>
                        <h2>One-Page Website/ <br /> Landingpage</h2>

                        <ul className={styles.details}>
                            <li><b>Dauer:</b> 1 Woche</li>
                            <li><b>Invesition:</b> ab 350 €</li>
                        </ul>
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.left}>
                            <div className={styles.content}>
                                <div className={styles.txt}>
                                    <h3>Zu wem passt das Angebot?</h3>
                                    <p>Die One-Page Website ist ideal für kleine lokale Unternehmen, die einen schnellen und ansprechenden Online-Auftritt benötigen. Sie eignet sich besonders für Friseursalons, Cafés, Bars und anderen kleinen Betrieben, die ihre Dienstleistungen und Produkte präsentieren möchten. <br /> <br /> Durch ihre Einfachheit und Direktheit ermöglicht sie es diesen Unternehmen, potenzielle Kunden anzusprechen und ihre Bekanntheit in der lokalen Gemeinschaft zu steigern.</p>
                                </div>

                                <div className={styles.list}>
                                    <h3>Das ist enthalten:</h3>
                                    <ul>

                                        <li><Image src="/images/check.svg" width={36} height={36} /> eine Landingpage/Homepage</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> rechtliche Seiten & Kontaktseite inbegriffen</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> <span>Figma Design & <b><u>Webflow Entwicklung</u></b></span></li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> Überarbeitungen bis Sie zufrieden sind</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> Maßgeschneiderte Video-Tutorials</li>
                                        <li><Image src="/images/unchecked.svg" width={36} height={36} /> kein Branding</li>
                                        <li><Image src="/images/unchecked.svg" width={36} height={36} /> keine Bilder oder Grafiken (es werden ausschließlich Ihre Bilder & Stockfotos verwendet)</li> </ul>
                                </div>
                            </div>

                            <div className={styles.link}>
                                <BlueButton href="/kontakt" black><span>Lassen Sie uns <u>loslegen</u></span></BlueButton>
                            </div>
                        </div>

                        <div className={styles.projekt} style={{ backgroundImage: "url('/images/BeforeTax-MockUp.png')" }}>
                            <div className={styles.title}>
                                <h3>BeforeTax</h3>
                                <span>Landingpage</span>

                                <div className={styles.arrow}>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </div>
                            </div>

                            <Link href="/portfolio/before-tax"></Link>
                        </div>
                    </div>
                </div>

                <div className={styles.paket} id='starter-paket'>
                    <div className={styles.top}>
                        <h2>Starter Website</h2>

                        <ul className={styles.details}>
                            <li><b>Dauer:</b> 2 Wochen</li>
                            <li><b>Invesition:</b> ab 750 €</li>
                        </ul>
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.left}>
                            <div className={styles.content}>
                                <div className={styles.txt}>
                                    <h3>Zu wem passt das Angebot?</h3>
                                    <p>Die Starter Website ist besonders geeignet für Unternehmen, die mehr über sich selbst und ihre Dienstleistungen preisgeben möchten. Mit mehr Raum für Inhalte bietet dieses Paket die Möglichkeit, sich professionell zu präsentieren und sich von der Konkurrenz abzuheben. Es ist ideal für kleine Unternehmen und Startups, die einen umfassenderen Online-Auftritt wünschen, um potenzielle Kunden zu überzeugen.</p>
                                </div>

                                <div className={styles.list}>
                                    <h3>Das ist enthalten:</h3>
                                    <ul>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> Branding (zzgl. 300€)</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> Homepage + 2 Unterseiten</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> rechtliche Seiten & Kontaktseite inbegriffen</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> <span>Figma Design & <b><u>Webflow Entwicklung</u></b></span></li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> Überarbeitungen bis Sie zufrieden sind</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> Maßgeschneiderte Video-Tutorials</li>
                                        <li><Image src="/images/unchecked.svg" width={36} height={36} /> keine Bilder oder Grafiken (es werden ausschließlich Ihre Bilder & Stockfotos verwendet)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.link}>
                                <BlueButton href="/kontakt" black><span>Lassen Sie uns <u>loslegen</u></span></BlueButton>
                            </div>
                        </div>

                        <div className={styles.projekt} style={{ backgroundImage: "url('/images/Expertise-Webdesign.png')" }}>
                            <div className={styles.title}>
                                <h3>RetourenHero Augsburg</h3>
                                <span>Starter Website</span>

                                <div className={styles.arrow}>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </div>
                            </div>

                            <Link href="/portfolio/retouren-hero"></Link>
                        </div>
                    </div>
                </div>

                <div className={`${styles.paket} ${styles.last}`} id='unternehmen-paket'>
                    <div className={styles.top}>
                        <h2>Unternehmens- <br /> Website</h2>

                        <ul className={styles.details}>
                            <li><b>Dauer:</b> 2 - 4 Wochen</li>
                            <li><b>Invesition:</b> ab 1250 €</li>
                        </ul>
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.left}>
                            <div className={styles.content}>
                                <div className={styles.txt}>
                                    <h3>Zu wem passt das Angebot?</h3>
                                    <p>Die Unternehmenswebsite richtet sich an etablierte Unternehmen, die eine umfassende Online-Präsenz benötigen, um in einem wettbewerbsintensiven Marktumfeld erfolgreich zu sein. Sie bietet Handwerkern, Anwälten, Zahnärzten und anderen Dienstleistern die Möglichkeit, ihre Leistungen detailliert zu präsentieren und das Vertrauen potenzieller Kunden zu gewinnen. <br /> <br /> Das integrierte Content-Management-System ermöglicht es diesen Unternehmen, ihre Website einfach zu pflegen und regelmäßig neue Inhalte zu veröffentlichen, um ihre Positionierung im Markt zu stärken und neue Geschäftsmöglichkeiten zu schaffen.</p>
                                </div>

                                <div className={styles.list}>
                                    <h3>Das ist enthalten:</h3>
                                    <ul>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> Branding (zzgl. 300€)</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> Homepage + 4 Unterseiten</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> Blog Funktion (zzgl. 250€)</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> rechtliche Seiten & Kontaktseite inbegriffen</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> <span>Figma Design & <b><u>Webflow Entwicklung</u></b></span></li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> Überarbeitungen bis Sie zufrieden sind</li>
                                        <li><Image src="/images/check.svg" width={36} height={36} /> Maßgeschneiderte Video-Tutorials</li>
                                        <li><Image src="/images/unchecked.svg" width={36} height={36} /> keine Bilder oder Grafiken (es werden ausschließlich Ihre Bilder & Stockfotos verwendet)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.link}>
                                <BlueButton href="/kontakt" black><span>Lassen Sie uns <u>loslegen</u></span></BlueButton>
                            </div>
                        </div>

                        <div className={styles.projekt} style={{ backgroundImage: "url('/images/Hypnose&Reiki-MockUp.png')" }}>
                            <div className={styles.title}>
                                <h3>Hypnose & Reiki Praxis München</h3>
                                <span>Unternehmenswebsite</span>

                                <div className={styles.arrow}>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </div>
                            </div>

                            <Link href="/portfolio/hypnose-und-reiki-praxis-muenchen"></Link>
                        </div>
                    </div>
                </div>

                <div className={`${styles.blackBox} ${styles.sec}`}>
                    <div className={styles.inside}>
                        {/* Unsere Expertise */}

                        <div className={styles.prozess}>
                            <div className={styles.topSec}>
                                <h2>Unsere Expertise</h2>
                                <p>So bringen wir Ihre Vision zur Realität.</p>
                            </div>

                            <div className={styles.main}>
                                <div className={styles.box}>
                                    <span>1</span>

                                    <div className={styles.txt}>
                                        <h3>Erstgespräch</h3>
                                        <p>In unserem ersten Gespräch befassen wir uns mit Ihren Zielen und Bedürfnissen, um eine maßgeschneiderte Lösung zu entwickeln, die perfekt zu Ihrem Unternehmen passt.</p>
                                    </div>
                                </div>

                                <div className={styles.box}>
                                    <span>2</span>

                                    <div className={styles.txt}>
                                        <h3>Strategie</h3>
                                        <p>Basierend auf den Informationen aus dem Erstgespräch entwickeln wir eine umfassende Strategie, die darauf abzielt, Ihre Online-Präsenz zu stärken und Ihre Ziele zu erreichen.</p>
                                    </div>
                                </div>

                                <div className={styles.box}>
                                    <span>3</span>

                                    <div className={styles.txt}>
                                        <h3>Design & Entwicklung</h3>
                                        <p>Wir erarbeiten in diesem Schritt ein ansprechendes und benutzerfreundliches Design, das Ihre Markenidentität widerspiegelt und gleichzeitig die bestmögliche Benutzererfahrung bietet.</p>
                                    </div>
                                </div>

                                <div className={styles.box}>
                                    <span>4</span>

                                    <div className={styles.txt}>
                                        <h3>Launch</h3>
                                        <p>Nach abschließender Überprüfung und Testphase laden wir Ihre neue Website hoch und bieten Ihnen zusätzlich angepasste Tutorials an, um sicherzustellen, dass Sie Ihre Website problemlos verwalten können.</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.links}>
                                <BlueButton href="/kontakt">Lerne uns kennen</BlueButton>
                                {/* <Link href="/dienstleistungen" className={styles.services}>Unsere Services</Link> */}
                            </div>
                        </div>
                    </div>
                </div>

                <Kontakt />
            </Main>
        </>
    )
}
