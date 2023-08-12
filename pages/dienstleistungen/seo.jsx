import React from 'react'
import styles from "../../styles/Services.module.css"
import Head from 'next/head'
import Main from '@/src/Main'
import ServiceTop from '@/src/small/ServiceTop/ServiceTop'
import ServiceSection from '@/src/small/ServiceSection/ServiceSection'
import P from '@/src/small/P'
import Prozess from '@/src/small/Prozess/Prozess'
import Faq from '@/src/small/FAQ/Faq'
import CTA from '@/src/small/CallToAction/CTA'

export default function seo() {

    return <>
        <Head>
            <title>SEO Agentur aus München | Infinite Agency</title>
            <meta name="description" content="Steigern Sie Ihre Online-Sichtbarkeit mit Infinite Agency. Wir bieten erstklassige SEO-Lösungen für Ihren Erfolg im Web." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
            
        </Head>

        <Main>
            <ServiceTop
                text1="Mit unserer maßgeschneiderten SEO-Strategie verbessern wir die Sichtbarkeit Ihrer Website in den Suchergebnissen. Dadurch gewinnen Sie mehr Kunden auf organische Weise und steigern Ihre Online-Präsenz nachhaltig."
                text2="Lassen Sie sich von einer wachsenden Zahl interessierter Besucher begeistern, während Ihre Website in den Suchergebnissen glänzt. Erfahren Sie, wie unsere SEO-Dienstleistung eine nachhaltige Kundenakquise ermöglicht."
                quals={[
                    "nachhaltige Ergebnisse",
                    "Steigerung der Glaubwürdigkeit",
                    "Gezielter Traffic",
                    "Höhere Sichtbarkeit"
                ]}
            >
                Google als Online-Marketing Kanal
            </ServiceTop>

            <ServiceSection src="/images/googleSeoPic.jpg" title="    Was ist Suchmaschinenoptimierung und wie hilft es meinem Unternehmen mehr Kunden zu gewinnen?">
                <div>
                    <P>Stellen Sie sich SEO als Ihre persönliche Wegweiserin vor, die potenzielle Kunden direkt zu Ihnen führt. Durch die gezielte Optimierung Ihrer Website für relevante Suchbegriffe und die Erstellung hochwertiger Inhalte, katapultieren wir Sie auf die vorderen Plätze bei Google. Das bedeutet mehr Sichtbarkeit, mehr Besucher und vor allem mehr potenzielle Kunden, die genau das finden, wonach sie suchen!</P>
                </div>
                <div>
                    <P>SEO ist unerlässlich, um die Sichtbarkeit Ihrer Website zu erhöhen, Ihre Zielgruppe zu erreichen und die Benutzererfahrung zu verbessern. In einer überfüllten digitalen Landschaft hilft SEO dabei, sich abzuheben und qualitativ hochwertigen organischen Traffic anzuziehen. Alles in einem verschaffen Ihnen Professionelle SEO-Strategien einen entscheidenden Vorteil gegeüber Ihrer Konkurrenz.</P>
                </div>
            </ServiceSection>

            <Prozess
                title
                steps={[
                    {
                        h3: <span>Website-Analyse & <br /> Zieletzung</span>,
                        p: "Wir analysieren gründlich Ihre Website, um ihre Stärken und Schwächen zu erkennen, setzen klare Ziele und entwickeln eine maßgeschneiderte Strategie, die speziell auf Ihr Unternehmen und Ihre Zielgruppe ausgerichtet ist."
                    },
                    {
                        h3: <span>Keyword-Recherche & <br /> On-Page-Optimierung</span>,
                        p: "Wir analysieren gründlich Ihre Website, um ihre Stärken und Schwächen zu erkennen, setzen klare Ziele und entwickeln eine maßgeschneiderte Strategie, die speziell auf Ihr Unternehmen und Ihre Zielgruppe ausgerichtet ist."
                    },
                    {
                        h3: <span>Technisches SEO & <br /> Off-Page Optimierung</span>,
                        p: "Wir analysieren gründlich Ihre Website, um ihre Stärken und Schwächen zu erkennen, setzen klare Ziele und entwickeln eine maßgeschneiderte Strategie, die speziell auf Ihr Unternehmen und Ihre Zielgruppe ausgerichtet ist."
                    },
                    {
                        h3: <span>Überwachung & <br /> weitere Content-Creation</span>,
                        p: "Wir analysieren gründlich Ihre Website, um ihre Stärken und Schwächen zu erkennen, setzen klare Ziele und entwickeln eine maßgeschneiderte Strategie, die speziell auf Ihr Unternehmen und Ihre Zielgruppe ausgerichtet ist."
                    }
                ]}
            >
                Unser Prozess bei <br /> der Umsetzung von SEO
            </Prozess>

            <Faq 
            src="/images/seoPic2.png"
            background
            questions={[
                {
                    q: "Erhöhter Traffic",
                    a: "Durch die gezielte Optimierung Ihrer Website für relevante Keywords ziehen wir qualifizierte Besucher für Sie an, die an Ihrem Angebot interessiert sind, was zu einem Anstieg des Website-Traffics führt.                    "
                },
                {
                    q: "Bessere Zielgruppenansprache",
                    a: "Mit einer effektiven SEO-Strategie erreichen wir genau die Menschen, die nach Ihren Produkten oder Dienstleistungen suchen, und bieten ihnen maßgeschneiderte Inhalte, die ihre Bedürfnisse ansprechen.                    "
                },
                {
                    q: "Hohe Conversion Rate",
                    a: "Gut optimierte Websites erzeugen Vertrauen bei den Besuchern und bieten eine reibungslose Nutzererfahrung, was zu einer höheren Conversion Rate führt, da mehr Besucher in zahlende Kunden umgewandelt werden.                    "
                },
                {
                    q: "Markenbekanntheit",
                    a: "Durch eine starke Präsenz in den Suchergebnissen steigert SEO die Sichtbarkeit Ihrer Marke, schafft Vertrauen und lässt Sie als Autorität in Ihrer Branche erscheinen.                    "
                },
                {
                    q: "Langfristige Ergebnisse",
                    a: "Während andere Marketingtaktiken möglicherweise kurzfristige Ergebnisse liefern, bietet SEO langfristige Vorteile, da gut optimierte Inhalte im Laufe der Zeit kontinuierlich Traffic und Conversions generieren.                    "
                }
            ]}
            >
                Deswegen sollten Sie <br /> Seo nutzen
            </Faq>

            <CTA href="/kontakt" link="Kontakt" subTitle="Beratung" noTop>Sie haben Fragen bezüglich SEO? <br /> Wir beraten Sie gerne!</CTA>
        </Main>
    </>
}
