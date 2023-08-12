import Main from '@/src/Main'
import Head from 'next/head'
import React, { useState } from 'react'
import styles from "../../styles/Services.module.css"
import PaddingContainer from '@/src/small/PaddingContainer'
import Title from '@/src/small/Title'
import P from '@/src/small/P'
import CircleLink from '@/src/small/CircleLink'
import CTA from '@/src/small/CallToAction/CTA'

export default function services() {
    const [rightEl, setRightEl] = useState("webdesign");
    let content = "";

    switch (rightEl) {
        case "webdesign":
            content = <div className={styles.service}>
                <div className={styles.title}>Webdesign für Ihren Online-Auftritt</div>
                <P>Innovation als Herzstück - Jeder Schritt, den wir gehen, ist darauf ausgerichtet, Ihre Ziele auf einzigartige Weise zu verwirklichen. Wir entwickeln Lösungen, die Ihre Visionen zum Leben erwecken.</P>

                <div className={styles.qual}>
                    <ul>
                        <P li>Ästhetische Designs</P>
                        <P li>Responsive Design</P>
                        <P li>Suchmaschinenfreundlich</P>
                    </ul>

                    <ul>
                        <P li>Benutzerfreundlichkeit</P>
                        <P li>Schnelle Ladezeiten</P>
                        <P li>Innovativ</P>
                    </ul>
                </div>

                <CircleLink href="/dienstleistungen/webdesign">Mehr erfahren</CircleLink>
            </div>
            break;

        case "webdev":
            content = <div className={styles.service}>
                <div className={styles.title}>Web-Entwicklung: Unsere Expertise. Ihr Erfolg.</div>
                <P>Vom innovativen Design zur fesselnden Realität – Unsere Entwickler setzen Ihre Vision Schritt für Schritt um, damit Sie eine beeindruckende Website erhalten, die Besucher begeistert und Ihre Ziele erreicht.</P>

                <div className={styles.qual}>
                    <ul>
                        <P li>Schnelle Ladezeiten</P>
                        <P li>Content Management System</P>
                        <P li>Technische Zuverlässigkeit</P>
                    </ul>

                    <ul>
                        <P li>Zugeschnitten auf Ihre Bedürfnisse</P>
                        <P li>Suchmaschinenfreundlich</P>
                    </ul>
                </div>

                <CircleLink href="/dienstleistungen/webentwicklung">Mehr erfahren</CircleLink>
            </div>
            break;

        case "seo":
            content = <div className={styles.service}>
                <div className={styles.title}>Google als Online-Marketing Kanal</div>
                <P>Mit unserer maßgeschneiderten SEO-Strategie verbessern wir die Sichtbarkeit Ihrer Website in den Suchergebnissen. Dadurch gewinnen Sie mehr Kunden auf organische Weise und steigern Ihre Online-Präsenz nachhaltig.</P>

                <div className={styles.qual}>
                    <ul>
                        <P li>nachhaltige Ergebnisse</P>
                        <P li>Gezielter Traffic</P>
                    </ul>

                    <ul>
                        <P li>Steigerung der Glaubwürdigkeit</P>
                        <P li>Höhere Sichtbarkeit</P>
                    </ul>
                </div>

                <CircleLink href="/dienstleistungen/seo">Mehr erfahren</CircleLink>
            </div>
            break;

        case "smm":
            content = <div className={styles.service}>
                <div className={styles.title}>Durch Social-Media zu neuen Kunden</div>
                <P>Unser Social-Media-Marketing (SMM) steckt voller innovativer Ideen, die Ihre Marke einzigartig hervorheben. Wir setzen Ihre Ziele mit Leidenschaft und Einfallsreichtum in die Tat um, um Ihre Visionen zum Leben zu erwecken.</P>

                <div className={styles.qual}>
                    <ul>
                        <P li>Erweiterte Reichweite</P>
                        <P li>Gezielte Ansprache</P>
                        <P li>Steigerung der Markenbekanntheit</P>
                    </ul>

                    <ul>
                        <P li>Interaktive Kommunikation</P>
                        <P li>Messbare Ergebnisse</P>
                        <P li>Verbesserte Konversionsrate</P>
                    </ul>
                </div>

                <CircleLink href="/dienstleistungen/social-media-marketing">Mehr erfahren</CircleLink>
            </div>
            break;

        default:
            break;
    }

    return <>
        <Head>
            <title>Unsere Dienstleistungen | Infinite Agency</title>
            <meta name="description" content="Steigern Sie Ihre Online-Präsenz mit Infinite Agency. Experten für Webdesign, Entwicklung, SEO und SMM. Wir verwandeln Ideen in digitale Erfolge." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="Hypnose, Hypnose München, Hypnosetherapie, Hypnosetherapie München, Reiki"></meta>
            <link rel="icon" href="/images/infiniteLogo.png" />
        </Head>

        <Main>
            <PaddingContainer className={styles.services} outerClass={styles.servicesOuter}>
                <div className={styles.left}>
                    <ul>
                        <li onClick={() => { setRightEl("webdesign") }} className={`${rightEl === "webdesign" ? styles.active : ""}`}>Webdesign <br /> UI/UX Design</li>
                        <li onClick={() => { setRightEl("webdev") }} className={`${rightEl === "webdev" ? styles.active : ""}`}>Web- <br /> Entwicklung</li>
                        <li onClick={() => { setRightEl("seo") }} className={`${rightEl === "seo" ? styles.active : ""}`}>Suchmaschinen- <br /> optimierung</li>
                        <li onClick={() => { setRightEl("smm") }} className={`${rightEl === "smm" ? styles.active : ""}`}>Social-Media <br /> Marketing</li>
                    </ul>
                </div>

                <div className={styles.main}></div>

                <div className={styles.right}>
                    {content}
                </div>
            </PaddingContainer>

            <CTA href="/kontakt" link="Kontakt" subTitle="Beratung" noTop>Lassen Sie sich von uns beraten! <br /> Gemeinsam finden wir die beste Online-Marketing Strategie!</CTA>
        </Main>
    </>
}
