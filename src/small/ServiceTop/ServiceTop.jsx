import React from 'react'
import styles from "./ServiceTop.module.css"
import P from '../P'
import PaddingContainer from '../PaddingContainer'

const ServiceTop = props => {
    return (
        <PaddingContainer className={styles.serviceTop} outerClass={styles.erviceTopOuter}>
            <div className={styles.left}>
                <h1>{props.children}</h1>
            </div>

            <div className={styles.right}>
                <div className={styles.text}>
                    <P>{props.text1}</P>
                    <P>{props.text2}</P>
                </div>

                <ul>
                    {props.quals.map(e => {return <P li>{e}</P>})}
                </ul>
            </div>
        </PaddingContainer>
    )
}

export default ServiceTop