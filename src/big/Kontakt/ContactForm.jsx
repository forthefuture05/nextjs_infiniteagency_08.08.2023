import React, { useState, useRef } from 'react'
import styles from "./ContactForm.module.css"
import Link from 'next/link';

const ContactForm = props => {
    const [formValues, setFormValues] = useState({});

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState(null);
    const [success, setSuccess] = useState(false);
    const [messageC, setMessageC] = useState(null);

    const emailRef = useRef(null);

    const validateInput = (name, value) => {
        switch (name) {
            case "name":
                if (value.length < 3) {
                    return "Der Name muss mindestens 3 Buchstaben haben";
                }
                break;
            case "website":
                if (value.length < 3) {
                    return "Wenn Sie eine Website haben dann bitte hier angeben (sonst ignorieren)";
                }
                break;
            case "message":
                if (value.length < 3) {
                    return "Nachricht ist zu kurz";
                }
                break;
            case "email":
                const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                if (!isValidEmail) {
                    return "Bitte eine Email angeben";
                }
                break;
            default:
                break;
        }
        return null;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        const error = validateInput(name, value);
        setFormValues({ ...formValues, [name]: value });
        setErrors({ ...errors, [name]: error });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        if (!errors.name && !errors.betreff && !errors.email && !errors.message) {
            console.log("Abschicken")

            const data = {
                ...formValues,
                emailRef: emailRef.current.value,
            }

            console.log(data);

            const dataJson = JSON.stringify(data)

            setLoading(true);

            fetch('/api/sendMail', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: dataJson,
            }).then((response) => {
                if (response.status === 200) {
                    setMessage("Nachricht erfolgreich abgeschickt!");
                    setSuccess(true);
                    setMessageC("good");
                } else {
                    setMessage("Etwas ist schief gegangen!");
                    setMessageC("bad");
                }
                setLoading(false);
            })


        }
    }

    return (
        <>
            <form className={`${styles.contactForm} ${success === true ? styles.success : ""} ${props.classForm}`} onSubmit={submitForm}>
                {message && <div className={styles.message}><p className={styles[messageC]}>{message}</p></div>}
                {loading && <div className={styles.message}><p>Nachricht wird abgeschickt...</p></div>}

                <div className={styles.forms}>
                    <div className={styles.inputs}>
                        <div className={styles.inputBx}>
                            <input type="text" name="name" placeholder="Name *" onBlur={handleChange} required />
                            {errors.name && <div className={styles.error}>{errors.name}</div>}
                        </div>

                        <div className={styles.inputBx}>
                            <input type="email" ref={emailRef} name="email" placeholder="E-Mail *" onBlur={handleChange} required />
                            {errors.email && <div className={styles.error}>{errors.email}</div>}
                        </div>

                        <div className={styles.inputBx}>
                            <input type="text" name="website" placeholder="Website" onBlur={handleChange} />
                            {errors.website && <div className={styles.error}>{errors.website}</div>}
                        </div>

                        <div className={styles.inputBx}>
                            <textarea placeholder="Wie können wir helfen? Erzähle uns mehr über Dein Projekt oder wann es Dir passt, kontaktiert zu werden. *" name="message" onBlur={handleChange} required rows="1"></textarea>
                            {errors.message && <div className={styles.error}>{errors.message}</div>}
                        </div>
                    </div>

                    <div className={styles.check}>
                        <div><input type="checkbox" required /></div>
                        <p>Ich erkläre mich mit der Verarbeitung der eingegeben Daten und der <Link href="/datenschutz">Datenschutzerklärung</Link> einverstanden!</p>
                    </div>
                </div>

                <div className={styles.abschicken}>
                    <input type="submit" value="Abschicken" />
                    <a href='mailto:kontakt@infiniteagency.de'>Stattdessen eine klassische E-Mail senden</a>
                </div>

                {success === true && <>
                    <div className={styles.coverMessage}>
                        <div>
                            <p><ion-icon name="checkmark-circle-outline"></ion-icon></p>
                            <h3>Nachricht erfolgreich gesendet!</h3>
                            <div className={styles.link}>
                                <input type="button" value="Zum Formular" onClick={() => {return setSuccess(false)}} />
                            </div>
                        </div>
                    </div>
                </>}
            </form>
        </>
    )
}

export default ContactForm