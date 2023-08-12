import React from 'react'
import styles from "../../styles/Services.module.css"
import Head from 'next/head'
import Main from '@/src/Main'
import ServiceTop from '@/src/small/ServiceTop/ServiceTop'
import ServiceSection from '@/src/small/ServiceSection/ServiceSection'
import P from '@/src/small/P'
import PaddingContainer from '@/src/small/PaddingContainer'
import Faq from '@/src/small/FAQ/Faq'
import CTA from '@/src/small/CallToAction/CTA'

export default function smm() {

    return <>
        <Head>
            <title>Social Media Marketing aus München | Infinite Agency</title>
            <meta name="description" content="Steigern Sie Ihren Online-Erfolg mit Infinite Agency – Ihrer Social Media Marketing Experten. Wir bringen Ihre Marke zum Strahlen. Erfahren Sie mehr!" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
            
        </Head>

        <Main>
            <ServiceTop
                text1="Unser Social-Media-Marketing (SMM) steckt voller innovativer Ideen, die Ihre Marke einzigartig hervorheben. Wir setzen Ihre Ziele mit Leidenschaft und Einfallsreichtum in die Tat um, um Ihre Visionen zum Leben zu erwecken."
                text2="Wir entwickeln zielgerichtete und maßgeschneiderte Strategien, die Ihre Marke effektiv promoten und Ihr Wachstum unterstützen. Lassen Sie uns gemeinsam eine SM-Präsenz aufbauen, die Ihr Unternehmen weiterbringt!"
                quals={[
                    "Erweiterte Reichweite",
                    "Interaktive Kommunikationen",
                    "Gezielte Ansprache",
                    "Messbare Ergebnisse",
                    "Steigerung der Markenbekanntheit",
                    "Verbesserte Konversionsrate"
                ]}
            >
                Durch Social-Media zu neuen Kunden
            </ServiceTop>

            <ServiceSection
                src="/images/smmPic.png"
                title="    Warum ist Social-Media Marketing im digitalen Zeitalter unverzichtbar für jedes Unternehmen?"
            >
                <div>
                    <P>Social Media Marketing ist heute unverzichtbar für jedes Unternehmen, das erfolgreich sein will. Mit Milliarden von Nutzern weltweit bieten Plattformen wie Facebook, Instagram, Twitter und LinkedIn eine hervorragende Möglichkeit, mit Ihrer Zielgruppe in Kontakt zu treten, Markenbekanntheit aufzubauen und Ihre Produkte oder Dienstleistungen zu bewerben.</P>
                </div>
                <div>
                    <P>Durch gezielte Kampagnen können Sie Ihre Zielgruppe genau ansprechen und auf Ihre Angebote aufmerksam machen. Gleichzeitig können Sie durch das Teilen von relevanten Inhalten Ihre Glaubwürdigkeit und Autorität in Ihrer Branche stärken. Kurz gesagt, Social Media Marketing bietet Ihnen eine hervorragende Möglichkeit, Ihre Marke aufzubauen, mehr Traffic auf Ihre Website zu lenken und langfristige Kundenbeziehungen aufzubauen.</P>
                </div>
            </ServiceSection>

            <PaddingContainer noTop className={styles.smm} outerClass={styles.smmOuter}>
                <div className={styles.top}>
                    <h2>Mit diesen SMM-Services helfen <br /> wir Ihrem Unternehmen</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.col}>
                        <h3>Business <br /> Branding</h3>
                        <P>Unsere Branding-Dienstleistung verleiht Ihrer Marke eine einzigartige Identität, um Ihre Sichtbarkeit zu stärken, die Kundenbindung zu fördern und Ihr Unternehmen von der Konkurrenz abzuheben.</P>
                        <ul>
                            <P li>Sichtbarkeit</P>
                            <P li>Kundenbindung</P>
                            <P li>Glaubwürdigkeit</P>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h3>Organisches <br /> SMM</h3>
                        <P>Mit organischem SMM stellen wir eine authentische Verbindung zwischen Ihnen und Ihrer Zielgruppe her, indem wir relevante und wertvolle Inhalte teilen, die das Engagement und die Interaktion fördern.</P>
                        <ul>
                            <P li>Engagement</P>
                            <P li>Community Aufbau</P>
                            <P li>nachhaltige Reichweite</P>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h3>Social- <br /> Media Marketing</h3>
                        <P>Unsere Social Media Werbeanzeigen ermöglichen es Ihnen, gezielt Ihre Zielgruppe zu erreichen und Ihre Botschaft effektiv zu verbreiten, um die Reichweite Ihrer Marke zu vergrößern.</P>
                        <ul>
                            <P li>Zielgerichtet</P>
                            <P li>Conversion-Rate</P>
                            <P li>gezielte Reichweite</P>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h3>Influencer <br /> Marketing</h3>
                        <P>Durch Influencer Marketing nutzen wir die Reichweite und Glaubwürdigkeit einflussreicher Persönlichkeiten, um Ihre Marke einem breiteren Publikum bekannt zu machen und neue Zielgruppen anzusprechen.</P>
                        <ul>
                            <P li>Glaubwürdigkeit</P>
                            <P li>Markenbekanntheit</P>
                        </ul>
                    </div>
                </div>
            </PaddingContainer>

            <Faq
                src="/images/smmPic2.png"
                
                questions={[
                    {
                        q: "Erhöhte Sichtbarkeit und Reichweite",
                        a: "Mit Social Media Marketing können Sie Ihre Botschaften über verschiedene Plattformen hinweg verbreiten und so eine größere Zielgruppe erreichen, die sonst möglicherweise nicht in Berührung mit Ihrer Marke käme."
                    },
                    {
                        q: "Steigerung der Markenbekanntheit",
                        a: "Durch konsistente und ansprechende Inhalte auf Social Media Plattformen können Sie Ihre Markenbekanntheit erhöhen und eine starke Online-Präsenz aufbauen, die Ihre Marke in den Köpfen Ihrer Zielgruppe verankert."
                    },
                    {
                        q: "Verbesserte Kundenbindung",
                        a: "SMM ermöglicht direkte Interaktion mit Ihren Kunden, fördert den Dialog und schafft eine persönliche Verbindung, die zu langfristigen Beziehungen führt und die Loyalität Ihrer Kunden stärkt."
                    },
                    {
                        q: "Mehr Conversions und Leads",
                        a: "SMM ermöglicht gezielte Anzeigen, die speziell auf Ihre Zielgruppe ausgerichtet sind. Dies führt zu qualifizierten Leads und erhöhten Conversion-Raten, da diejenigen, die auf Ihre Inhalte reagieren, eher geneigt sind, zu handeln."
                    },
                    {
                        q: "Flexibilität und Anpassungsfähigkeit",
                        a: "SMM ermöglicht es Ihnen, Ihre Marketingstrategie je nach Bedarf anzupassen, neue Trends zu nutzen und schnell auf Veränderungen in der Marktlandschaft zu reagieren, um immer relevant und aktuell zu bleiben."
                    }
                ]}
            >
                Deswegen sollten Sie <br /> SMM nutzen
            </Faq>

            <CTA href="/kontakt" link="Kontakt" subTitle="Beratung" noTop>Sie haben Fragen bezüglich SMM? <br /> Wir beraten Sie gerne!</CTA>
        </Main>
    </>
}