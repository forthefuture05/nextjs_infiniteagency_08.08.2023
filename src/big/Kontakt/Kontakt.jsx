import React from 'react'
import styles from "./ContactForm.module.css"
import ContactForm from './ContactForm'

const Kontakt = () => {

    return (
        <div className={styles.kontakt}>
            <div className={styles.img}>

            </div>

            <div className={styles.txt}>
                <h2>Lass uns Dein Projekt besprechen</h2>

                <ContactForm />
            </div>
        </div>
    )
}

export default Kontakt