import React from 'react'
import styles from "./smallComponents.module.css"

const SubTitle = props => {
  return (
    <h2 className={`${props.white ? styles.white : ""} ${props.bubble ? styles.bubble : styles.subtitle}`}>
      {props.children}
    </h2>
  )
}

export default SubTitle