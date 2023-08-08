import React from 'react'
import styles from "../../styles/Services.module.css"
import Main from '@/src/Main'
import Head from 'next/head'
import ServiceTop from '@/src/small/ServiceTop/ServiceTop'
import PaddingContainer from '@/src/small/PaddingContainer'
import P from '@/src/small/P'
import CTA from '@/src/small/CallToAction/CTA'

export default function webentwicklung() {

    return <>
        <Head>
            <title>Online Marketing Agentur aus München | Infinite Agency</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="Hypnose, Hypnose München, Hypnosetherapie, Hypnosetherapie München, Reiki"></meta>
            <link rel="icon" href="/images/infiniteLogo.png" />
        </Head>

        <Main>
            <ServiceTop
                text1="Vom innovativen Design zur fesselnden Realität – Unsere Entwickler setzen Ihre Vision Schritt für Schritt um, damit Sie eine beeindruckende Website erhalten, die Besucher begeistert und Ihre Ziele erreicht."
                text2="Unsere Webentwicklung geht über das Ästhetische hinaus. Wir bringen Funktionalität, Geschwindigkeit und technisches SEO zusammen, um eine makellose Website zu liefern, die Ihr Unternehmen vorantreibt."
                quals={[
                    "Schnelle Ladezeiten",
                    "Zugeschnitten auf Ihre Bedürfnisse",
                    "Content Management System",
                    "Suchmaschinenfreundlich",
                ]}
            >
                Unsere Expertise. Ihr Erfolg.
            </ServiceTop>

            <PaddingContainer className={styles.webDev} noTop>
                <div className={styles.top}>
                    <h2>Maßgescnheiderte Lösungen <br /> für Ihren Erfolg</h2>
                </div>

                <div className={styles.content}>
                    <div className={styles.webflow}>
                        <div className={styles.image}></div>
                        <div className={styles.text}>
                            <h3>Entwicklung mit <br /> Webflow</h3>

                            <P>Stellen Sie sich vor, Sie könnten eine atemberaubende Website besitzen, die genau Ihren Vorstellungen entspricht, ohne dass Sie sich um die technischen Details kümmern müssen. Mit einer Webflow Webseite machen wir Ihre Träume wahr! Webflow ist ein magisches Werkzeug, mit dem wir zauberhafte Websites erschaffen können, die Ihre Besucher beeindrucken werden. Und das Beste daran ist, dass Sie später mühelos Ihre eigenen Texte und Bilder ändern können, als ob Sie auf einem Kunstwerk malen würden.</P>

                            <h4>Vorteile:</h4>

                            <ul>
                                <P li><b>Einfache Bearbeitung:</b> Sie können ganz leicht Texte, Bilder und Inhalte auf Ihrer Website ändern, ohne dass Sie dafür technische Kenntnisse benötigen.</P>
                                <P li><b>Schnelle Entwicklung:</b> Mit Webflow können wir Websites schneller erstellen, da die Plattform bereits viele Design- und Entwicklungswerkzeuge integriert hat. Next.js hingegen erfordert eine Entwicklungsphase, um maßgeschneiderte Funktionen zu implementieren.</P>
                                <P li><b>All-in-One-Lösung:</b> Webflow bietet Hosting, Domainverwaltung und einen visuellen Editor in einem Paket, was den Verwaltungsaufwand reduziert.</P>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.nextJs}>
                        <div className={styles.image}></div>
                        <div className={styles.text}>
                            <h3>Entwicklung mit <br /> Next.js</h3>

                            <P>Mit einer Next.js Webseite können wir für Sie eine superschnelle und hochmoderne Website erstellen, die nicht nur Ihre Besucher beeindruckt, sondern auch von Suchmaschinen geliebt wird. Next.js ist wie ein leistungsstarker Superheld für Ihre Website, der sie blitzschnell lädt und Ihre Online-Präsenz in den Suchergebnissen nach oben katapultiert. Entdecken Sie die außergewöhnlichen Möglichkeiten von Next.js und lassen Sie uns gemeinsam eine Website entwickeln, die Sie und Ihre Besucher gleichermaßen begeistern wird.</P>

                            <h4>Vorteile:</h4>

                            <ul>
                                <P li><b>Superschnelle Ladezeiten:</b> Next.js optimiert Ihre Website, sodass sie unglaublich schnell geladen wird, was Ihre Besucher begeistert und Ihre Absprungrate reduziert.</P>
                                <P li><b>Bessere Sichtbarkeit:</b> Mit Next.js wird Ihre Website für Suchmaschinen wie Google optimiert, sodass mehr potenzielle Kunden Ihre Website finden und besuchen können.</P>
                                <P li><b>Zuverlässige Leistung:</b> Ihre Next.js Webseite wird stabil und sicher laufen, unabhängig davon, wie viele Besucher gleichzeitig Ihre Seite aufrufen.</P>
                            </ul>
                        </div>
                    </div>
                </div>
            </PaddingContainer>

            <CTA href="/kontakt" link="Kontakt" subTitle="Beratung" noTop>Lassen Sie sich von uns beraten! <br /> Gemeinsam finden wir die beste Lösung für Ihre Website!</CTA>
        </Main>
    </>
}
