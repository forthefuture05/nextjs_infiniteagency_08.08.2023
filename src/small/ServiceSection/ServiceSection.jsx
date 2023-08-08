import React from 'react'
import styles from "./ServiceSection.module.css"
import PaddingContainer from '../PaddingContainer'
import P from '../P'
import CircleLink from '../CircleLink'

const ServiceSection = props => {
    return (
        <PaddingContainer noTop className={styles.serviceSection} outerClass={styles.serviceSectionOuter}>
            <div className={styles.innerCtn}>
                <div className={styles.image} style={{backgroundImage: `url("${props.src}")`}}></div>

                <div className={styles.text}>

                    <h2 noCap>{props.title}</h2>

                    <div className={styles.twoCols}>
                        {props.children}
                    </div>
                </div>

                <div className={styles.link}><CircleLink href="/kontakt">Angebot anfordern</CircleLink></div>
            </div>

        </PaddingContainer>
    )
}

export default ServiceSection