import React, { useState } from 'react'
import styles from "./ContactForm.module.css"
import Link from 'next/link';
import P from '@/src/small/P';

const ContactForm = props => {
    const [formValues, setFormValues] = useState({});

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState(null);
    const [messageC, setMessageC] = useState(null);

    const validateInput = (name, value) => {
        switch (name) {
            case "name":
                if (value.length < 3) {
                    return "Der Name muss mindestens 3 Buchstaben haben";
                }
                break;
            case "betreff":
                if (value.length < 3) {
                    return "Betreff darf nicht leer sein";
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
                ...formValues
            }

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
        <form className={`${styles.contactForm} ${props.classForm}`} onSubmit={submitForm}>
            {message && <div className={styles.message}><p className={styles[messageC]}>{message}</p></div>}
            {loading && <div className={styles.message}><p>Nachricht wird abgeschickt...</p></div>}
            <div className={styles.nameMail}>
                <div>
                    <input type="text" name="name" placeholder="Name *" onBlur={handleChange} required />
                    {errors.name && <div className={styles.error}>{errors.name}</div>}
                </div>
                <div>
                    <input type="email" name="email" placeholder="E-Mail *" onBlur={handleChange} required />
                    {errors.email && <div className={styles.error}>{errors.email}</div>}
                </div>
            </div>
            <input type="text" name="betreff" placeholder="Betreff *" onBlur={handleChange} required />
            {errors.betreff && <div className={styles.error}>{errors.betreff}</div>}
            <textarea placeholder="Nachricht *" name="message" onBlur={handleChange} required rows="1"></textarea>
            {errors.message && <div className={styles.error}>{errors.message}</div>}
            <div className={styles.check}>
                <div><input type="checkbox" required /></div>
                <p>Ich erkläre mich mit der Verarbeitung der eingegeben Daten und der <Link href="/datenschutz">Datenschutzerklärung</Link> einverstanden!</p>
            </div>

            <input type="submit" value="Abschicken" />
        </form>
    )
}

export default ContactForm