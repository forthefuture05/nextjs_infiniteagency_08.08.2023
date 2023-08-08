import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SEND_EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
    },
});


export default function handler(req, res) {
    console.log(req.body);
    const { name, email, betreff, message } = req.body;
    const data = req.body;

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    // Check if the form data is valid
    if (name.length < 3 && email.length < 3 && betreff.length < 3 && !isValidEmail) {
        res.status(400).json({ message: 'Invalid form data' });
        return;
    }

    // Send the email
    transporter.sendMail({
        from: process.env.SEND_EMAIL_ADDRESS,
        to: process.env.GET_EMAIL_ADDRESS,
        subject: `Nachricht von Website Besucher - Betreff: ${betreff}`,
        html: `<h2>Eine Nachricht von ${name}!</h2><div style="display: flex;margin-bottom: 100px;"><h4 style="margin-top: 0;">Die Nachricht:</h4><p style="margin-left: 20px;margin-top:0;">${message}</p></div><span><b>E-Mail des Besuchers:</b> ${email} <br><br> <b>Name:</b> ${name}`,
    }, function (error, info) {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to send email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email sent' });
        }
    });
}