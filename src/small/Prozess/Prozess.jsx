import React from 'react'
import styles from "./Prozess.module.css"
import P from '../P'
import PaddingContainer from '../PaddingContainer'

const Prozess = props => {
    return (
        <PaddingContainer className={styles.prozess} outerClass={styles.prozessOuter}>
            {props.title ? <h2>{props.children}</h2> : ""}
            <div className={styles.content}>
                <div className={styles.innerCtn}>
                    {props.steps.map(e => {
                        return <div className={styles.step}>
                            <h3>{e.h3}</h3>
                            <p>{e.p}</p>
                        </div>
                    })}
                </div>
            </div>
        </PaddingContainer>
    )
}

export default Prozess