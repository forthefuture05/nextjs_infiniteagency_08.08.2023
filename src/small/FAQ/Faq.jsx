import React from 'react'
import styles from "./Faq.module.css"
import Question from './Question'
import PaddingContainer from '../PaddingContainer'

const Faq = props => {

    return (
        <PaddingContainer noTop className={styles.faq}>
            {props.background ? <div className={styles.image} style={{backgroundImage: `url("${props.src}")`}}></div> : <div className={styles.image}><img src={props.src} alt="" /></div>}

            <div className={styles.content}>
                <div>
                    <h2>{props.children}</h2>

                    <div className={styles.qs}>
                        {props.questions.map(e => { return <Question question={e.q}>{e.a}</Question> })}
                    </div>
                </div>
            </div>
        </PaddingContainer>
    )
}

export default Faq