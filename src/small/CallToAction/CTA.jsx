import React from 'react'
import styles from "./CTA.module.css"
import SubTitle from '../SubTitle'
import Title from '../Title'
import CircleLink from '../CircleLink'
import PaddingContainer from '../PaddingContainer'

const CTA = props => {

    return (
        <PaddingContainer className={styles.cta} outerClass={`${styles.ctaOuter} ${props.noTop ? styles.noTop : ""}`}>
            <div className={styles.center}>
                <SubTitle bubble>{props.subTitle}</SubTitle>
            </div>
            <Title className={styles.title}>{props.children}</Title>

            <div className={styles.link}>
            <CircleLink href={props.href}>{props.link}</CircleLink>
            </div>
        </PaddingContainer>
    )
}

export default CTA