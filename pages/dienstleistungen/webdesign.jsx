import Main from '@/src/Main'
import PaddingContainer from '@/src/small/PaddingContainer'
import Prozess from '@/src/small/Prozess/Prozess'
import ServiceTop from '@/src/small/ServiceTop/ServiceTop'
import Head from 'next/head'
import React from 'react'
import styles from "../../styles/Services.module.css"
import Title from '@/src/small/Title'
import P from '@/src/small/P'
import CircleLink from '@/src/small/CircleLink'
import Faq from '@/src/small/FAQ/Faq'
import CTA from '@/src/small/CallToAction/CTA'
import ServiceSection from '@/src/small/ServiceSection/ServiceSection'

export default function webdesign() {

    return <>
        <Head>
            <title>Erstklassige Webdesign Agentur aus München | Infinite Agency</title>
            <meta name="description" content="Infinite Agency formt digitale Visionen. Kreatives Webdesign, nahtlose Nutzererfahrung. Gemeinsam gestalten wir Ihre Online-Präsenz." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="Hypnose, Hypnose München, Hypnosetherapie, Hypnosetherapie München, Reiki"></meta>
            <link rel="icon" href="/images/infiniteLogo.png" />
        </Head>

        <Main>
            <ServiceTop
                text1="Innovation als Herzstück - Jeder Schritt, den wir gehen, ist darauf ausgerichtet, Ihre Ziele auf einzigartige Weise zu verwirklichen. Wir entwickeln Lösungen, die Ihre Visionen zum Leben erwecken."
                text2="Jedes Projekt eröffnet Chancen für bahnbrechende Ergebnisse, die Sie an die Spitze bringen. Unsere Leidenschaft und Hingabe spiegeln sich in unserer engagierten Herangehensweise wider."
                quals={[
                    "Ästhetische Designs",
                    "Benutzerfreundlichkeit",
                    "Responsive Design",
                    "Schnelle Ladezeiten",
                    "Suchmaschinenfreundlich",
                    "Innovativ"
                ]}
            >
                Webdesign für Ihren Online-Auftritt
            </ServiceTop>

            <Prozess
                steps={[
                    {
                        h3: <span>Analyse & <br /> Inspiration</span>,
                        p: "Wir beginnen mit einer gründlichen Analyse Ihrer Bedürfnisse und sammeln Inspirationen, um ein fundiertes Verständnis für Ihr Projekt zu entwickeln."
                    },
                    {
                        h3: <span>Ideenfindung & <br /> Konzeption</span>,
                        p: "In diesem Schritt lassen wir unserer Kreativität freien Lauf und entwickeln innovative Ideen und Wireframes, die speziell auf Ihre Vision zugeschnitten sind."
                    },
                    {
                        h3: <span>Umsetzung & <br /> Gestaltung</span>,
                        p: "Aus Konzepten werden Prototypen - wir setzen Ihre ausgewählten Wireframes in ästhetisch ansprechende Designs um, die Funktionalität und Ästhetik vereinen."
                    },
                    {
                        h3: <span>Feedback & <br /> Perfektion</span>,
                        p: "Sie entscheiden wenn es fertig ist! Wir arbeiten eng mit Ihnen zusammen, um das Design zu optimieren und sicherzustellen, dass es Ihre Erwartungen in jeder Hinsicht erfüllt."
                    }
                ]}
            />

            <ServiceSection src="/images/webdesignPic1.jpg" title="Kreativität, die Ihre Besucher fesselt">
                <div>
                    <P>Ein einzigartiges Webdesign und eine durchdachte Inhaltsstruktur sind der Schlüssel, um Ihre Besucher auf Ihrer Website zu fesseln und sie länger dort zu halten. Mit gut platzierten Call-to-Actions und einer intuitiven Benutzerführung steigern wir die Chancen, dass potenzielle Kunden zu tatsächlichen Kunden werden.</P>
                    <P>Ein ansprechendes Design weckt das Interesse Ihrer Besucher und schafft eine positive Nutzererfahrung, die sie in den Bann zieht. Es fördert das Vertrauen in Ihre Marke und vermittelt Professionalität. Eine klare Strukturierung der Inhalte ermöglicht es Ihren Besuchern, sich einfach zurechtzufinden und die gewünschten Informationen schnell zu finden.</P>
                </div>
                <div>
                    <P>Ein gutes Design ist kein Luxus, sondern ein absolutes Muss für jedes Unternehmen. Es ist essenziell, um eine starke Online-Präsenz aufzubauen und Ihre Zielgruppe zu erreichen. Das Investieren in hochwertiges Webdesign zahlt sich in Form von längeren Verweildauern, höheren Conversions und letztendlich mehr Kunden aus.</P>
                    <P>Denken Sie daran, dass Ihre Website Ihr Aushängeschild im digitalen Zeitalter ist. Ein beeindruckendes Design und eine gut strukturierte Website sind Ihre Chance, einen bleibenden Eindruck zu hinterlassen und sich von der Konkurrenz abzuheben. Lassen Sie uns gemeinsam ein Webdesign entwickeln, das Ihren Online-Erfolg steigert!</P>
                </div>
            </ServiceSection>

            <Faq
                src="/images/portfolioEinblick.jpg"
                questions={[
                    {
                        q: "Professionelles und ansprechendes Design",
                        a: "Unsere Webdesigns sind eine perfekte Balance aus Ästhetik und Funktionalität. Mit viel Liebe zum Detail gestaltet, hinterlassen sie einen bleibenden Eindruck und heben Ihr Unternehmen von der Konkurrenz ab.                        "
                    },
                    {
                        q: "Responsive Design",
                        a: "Ihre Website wird auf allen Geräten optimal dargestellt. Unser responsives Design sorgt dafür, dass Ihre Inhalte auf Smartphones, Tablets und Desktops gleichermaßen beeindrucken und die Nutzererfahrung nahtlos bleibt.                        "
                    },
                    {
                        q: "Benutzerfreundlichkeit",
                        a: "Unsere Designs setzen auf intuitive Navigation und klare Strukturen. Wir stellen sicher, dass Ihre Besucher mühelos durch Ihre Website navigieren können, um Informationen zu finden und Aktionen auszuführen.                        "
                    },
                    {
                        q: "Individualisierung",
                        a: "Jedes Design wird maßgeschneidert, um die Einzigartigkeit Ihrer Marke zu reflektieren. Wir berücksichtigen Ihre Wünsche und Vorstellungen, um eine Website zu schaffen, die Ihre Identität und Botschaft perfekt verkörpert.                        "
                    },
                    {
                        q: "Suchmaschinenfreundlichkeit",
                        a: "Unsere Designs sind von Anfang an suchmaschinenoptimiert. Wir integrieren bewährte SEO-Praktiken, um sicherzustellen, dass Ihre Website von den Suchmaschinen gut erkannt und indexiert wird, was zu einer besseren Sichtbarkeit führt.                        "
                    },
                ]}
            >Entdecken Sie die Vorzüge <br /> unseres Webdesigns</Faq>

            <CTA subTitle="Teamwork" href="/kontakt" link="Kontakt" noTop>Wir freuen uns auf eine <br /> Zusammenarbeit mit Ihnen!</CTA>
        </Main>
    </>
}
