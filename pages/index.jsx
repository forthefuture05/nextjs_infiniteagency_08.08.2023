import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/src/Main'
import styles from '@/styles/Home.module.css'
import BlueButton from '@/src/small/BlueButton'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css';
import ContactForm from '@/src/big/Kontakt/ContactForm'
import Kontakt from '@/src/big/Kontakt/Kontakt'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
    const projekte = props.projekte;

    return (
        <>
            <Head>
                <title>Infinite Agency</title>
                <meta name="description" content="Eine Website by Infinite Agency" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/Infinite-Logo-Icon.svg" />
            </Head>

            <Main>

                <div className={styles.Hero}>
                    <div className={styles.image}>
                        <div className={styles.img}>

                        </div>
                    </div>

                    <div className={styles.txt}>
                        <div>
                            <h1>Webdesign Agentur aus München</h1>
                            <div className={styles.headline}><div>Ihre Vision.  <br /> <div className={styles.flex}>Unsere <div className={styles.underline}>Realität.</div></div></div></div>
                            <p>Bei uns erzählt jedes Pixel Ihre Geschichte und jedes Design ebnet den Weg zu Ihrem Erfolg.</p>

                            <div className={styles.linksOuter}>
                                <div className={styles.links}>
                                    <div><BlueButton href="/kontakt">Lerne uns kennen</BlueButton></div>
                                    <Link href="/dienstleistungen" className={styles.services}>Unsere Services</Link>
                                </div>
                            </div>

                            <ul>
                                <li><ion-icon name="checkmark-outline"></ion-icon> Branding</li>
                                <li><ion-icon name="checkmark-outline"></ion-icon> Webdesign</li>
                                <li><ion-icon name="checkmark-outline"></ion-icon> Webentwicklung</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Black Box - Expertise & Mission */}

                <div className={`${styles.blackBox} ${styles.first}`}>
                    <div className={styles.inside}>
                        {/* Unsere Expertise */}

                        <div className={styles.expertise}>
                            <div className={styles.topSec}>
                                <h2>Unsere Expertise</h2>
                                <p>Mit fundierter Expertise beherrschen wir die Bereiche Branding, Webdesign und Webentwicklung, um maßgeschneiderte Lösungen für Ihr Unternehmen zu schaffen.</p>
                            </div>

                            <div className={styles.main}>
                                <div className={styles.boxes}>
                                    <div className={styles.box}>
                                        <div className={styles.upside}>
                                            <h3>Unternehmen Branding</h3>
                                            <hr />
                                            <p>Unser Branding-Service entwickelt eine einzigartige visuelle Identität, die Ihr Unternehmen authentisch repräsentiert und Ihre Zielgruppe anspricht. Wir helfen Ihnen, eine starke Markenpräsenz aufzubauen und sich in einem wettbewerbsintensiven Markt zu differenzieren.</p>
                                        </div>

                                        <div className={styles.img} style={{ backgroundImage: "url('/images/Expertise-Branding-4.png')" }}></div>
                                    </div>

                                    <div className={`${styles.box} ${styles.webdesign}`}>
                                        <div className={styles.upside}>
                                            <div><div className={styles.underline}>Webdesign</div></div>
                                            <hr />
                                            <p>Wir konzentrieren uns auf benutzerzentriertes Design und intuitive Navigation, um Websites zu erstellen, die beeindrucken und Ergebnisse liefern. Wir bringen Ihre Online-Präsenz auf ein neues Niveau und helfen Ihnen, sich von der Konkurrenz abzuheben.</p>
                                        </div>

                                        <div className={styles.img} style={{ backgroundImage: "url('/images/Expertise-Webdesign.png')" }}></div>
                                    </div>

                                    <div className={styles.box}>
                                        <div className={styles.upside}>
                                            <h3>Web- <br /> Entwicklung</h3>
                                            <hr />
                                            <p>Wir bieten maßgeschneiderte Lösungen, die auf Ihre spezifischen Anforderungen zugeschnitten sind. Wir nutzen die neuesten Technologien, wie <Link href="https://webflow.com/" target='_blank'>Webflow</Link>, um robuste und leistungsstarke Websites zu entwickeln, die Ihren Geschäftszielen entsprechen.</p>
                                        </div>

                                        <div className={styles.img} style={{ backgroundImage: "url('/images/Expertise-Webdev.jpg')" }}></div>
                                    </div>
                                </div>

                                <div className={styles.link}>
                                    <BlueButton href="/dienstleistungen" white><span>Zu unseren <u>Services</u></span></BlueButton>
                                </div>

                            </div>

                            {/* Unsere Mission */}

                            <div className={styles.mission}>
                                <div className={styles.top}>
                                    <h2>Unsere Mission hier bei</h2>
                                    <Image src="/images/Infinite-Logo-White.svg" width={290} height={75} />
                                </div>

                                <div className={styles.title}>
                                    <p>“Infinite Agency ist der Motor hinter kleinen Unternehmen, die im digitalen Raum erflogreich sein wollen.
                                        Mit unserer kreativen Fusion aus Branding, Webdesign und Webentwicklung unterstützen wir Sie dabei eine professionelle Webpräsenz aufzubauen die Kunden anzieht!”
                                        <br /><span>- Patrik Sandu, Gründer von I. A.</span></p>
                                </div>

                                <div className={styles.link}>
                                    <BlueButton href="/portfolio" white><span>Zu unseren <u>Projekten</u></span></BlueButton>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Unsere Projekte */}

                <div className={styles.projekte}>
                    <div className={styles.top}>
                        <p>Webdesign Agentur aus München</p>
                        <div className={styles.headline}>Projekte by <br /> <div className={styles.underline}>Infinite Agency</div></div>
                    </div>

                    <div className={styles.slider}>
                        {projekte.length === 0 ? "Projekte konnten nicht geladen werden" : <Swiper
                            slidesPerView={1}
                            spaceBetween={40}
                            autoHeight={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: `.${styles.sliderNext}`,
                                prevEl: `.${styles.sliderPrev}`,
                                clickable: true,
                                enabled: true
                            }}
                            breakpoints={{
                                700: {
                                    slidesPerView: 1
                                },
                                1200: {
                                    slidesPerView: 3
                                }
                            }}
                            modules={[Pagination, Navigation, Autoplay]}
                            className={styles.slider}
                        >
                            <div className={styles.sliderPrev}>
                                <div><ion-icon name="arrow-back-outline"></ion-icon></div>
                            </div>
                            {projekte.map(e => {
                                return <SwiperSlide key={e.id}>
                                    <div key={e.id} className={styles.projekt}>
                                        <div className={styles.image} style={{ backgroundImage: `url("${e.attributes.MockUpImage.data.attributes.url}")` }}><Link href={`/portfolio/${e.attributes.Slug}`}></Link></div>

                                        <div className={styles.bottom}>
                                            <div>
                                                <h3>{e.attributes.Name}</h3>
                                                {/* <p>{new Date(e.attributes.Fertigstellung).toLocaleDateString("default", {
                                                    month: "long",
                                                    year: "numeric"
                                                })}</p> */}
                                                <p>{e.attributes.Category}</p>

                                            </div>

                                            <Link href={`/portfolio/${e.attributes.Slug}`}></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            <div className={styles.sliderNext}>
                                <div><ion-icon name="arrow-forward-outline"></ion-icon></div>
                            </div>
                        </Swiper>}
                    </div>

                    <div className={styles.link}>
                        <BlueButton href="/portfolio"><span>Alle <u>Projekte</u> ansehen</span></BlueButton>
                    </div>
                </div>

                {/* Rund-Um-Sorglos Paket */}

                <div className={styles.rundum}>
                    <div className={styles.top}>
                        <h2>Wir bieten unseren Kunden <br /> ein Rund-Um-Sorglos Paket</h2>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.img2}></div>

                        <ul>
                            <li><Image src="/images/check.svg" width={36} height={36} /> <span><b>Branding:</b> Entwicklung einer einzigartigen Markenidentität, die sich durch klare Botschaften und visuelle Ästhetik auszeichnet.</span></li>

                            <li><Image src="/images/check.svg" width={36} height={36} /> <span><b>Benutzererfahrung (UX):</b> Gestaltung einer benutzerfreundlichen Website, die eine nahtlose Navigation und ein intuitives Design bietet.</span></li>

                            <li><Image src="/images/check.svg" width={36} height={36} /> <span><b>Suchmaschinenoptimierung (SEO):</b> Implementierung von SEO-Techniken, um die Sichtbarkeit Ihrer Website in Suchmaschinenergebnissen zu verbessern.</span></li>

                            <li><Image src="/images/check.svg" width={36} height={36} /> <span><b>Content Management:</b> Einrichtung eines einfach zu bedienenden Content-Management-Systems (CMS), das es Ihnen ermöglicht, Inhalte einfach zu verwalten und zu aktualisieren.</span></li>

                            <li><Image src="/images/check.svg" width={36} height={36} /> <span><b>Analytik und Tracking:</b> Einrichtung von Analysetools, um das Nutzerverhalten zu verfolgen und Einblicke zu gewinnen, die zur kontinuierlichen Verbesserung der Website beitragen.</span></li>
                        </ul>

                        <div className={styles.img}></div>
                    </div>

                    <div className={styles.links}>
                        <BlueButton href="/kontakt">Lerne uns kennen</BlueButton>
                        <Link href="/dienstleistungen" className={styles.services}>Unsere Services</Link>
                    </div>
                </div>


                <div className={`${styles.blackBox} ${styles.sec}`}>
                    <div className={styles.inside}>
                        {/* Unsere Expertise */}

                        <div className={styles.prozess}>
                            <div className={styles.topSec}>
                                <h2>So gehen wir vor</h2>
                                <p>Mit fundierter Expertise beherrschen wir die Bereiche Branding, Webdesign und Webentwicklung, um maßgeschneiderte Lösungen für Ihr Unternehmen zu schaffen.</p>
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
                                <Link href="/dienstleistungen" className={styles.services}>Unsere Services</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kontakt Formular */}

                <Kontakt />
            </Main>
        </>
    )
}



export async function getStaticProps() {
    const req = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects/?populate=Screenshot,MockUpImage&pagination[limit]=5&sort=Fertigstellung:desc`);
    const res = await req.json();

    return {
        props: {
            projekte: res.data,
        }
    }
}
