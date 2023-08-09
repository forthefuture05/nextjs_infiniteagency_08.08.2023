import React, { useEffect, useState } from 'react'
import styles from "./CookieConsent.module.css"
import Cookies from 'js-cookie'

const CookieConsent = (props) => {

    const [accCookies, setAccCookies] = useState(null);
    useEffect(() => {
        const acc = Cookies.get("accCookies");
        if (acc) {
            setAccCookies(true);
        } else {
            setAccCookies(false);
        }
    }, [])

    const closeCookies = (event) => {
        setAccCookies(true);
        Cookies.set("accCookies", "accepted", { expires: 7 })
    }

    return (
        <>
            {accCookies === false && <div className={styles.cookie}>
                <h3>Cookies</h3>
                <p>Durch die weitere Nutzung der Seite stimmst du der Verwendung von Cookies zu. <a href="/datenschutz">Weitere Informationen</a></p>
                <div><div className={styles.button} onClick={closeCookies}>Akzeptieren</div></div>
            </div>}
        </>
    )
}

export default CookieConsent