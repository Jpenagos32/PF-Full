const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
require('dotenv').config()
const { USER, PASS } = process.env

const transporter = nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
        user: USER,
        pass: PASS,
    },
});

const notification = async (req, res) => {
    try {
        // const email = req.body
        // const to = email;
        const to = "svilapalomo@gmail.com";
        const subject = 'Correo de prueba';
        const body = 'Contenido del correo de prueba';
        const mailOptions = {
            from: USER,
            to,
            subject,
            text: body,
        };
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).send('Error al enviar el correo')
            } else {
                res.status(200).send('Correo enviado exitosamente')
            }
        })
    } catch (error) {
        res.status(500).json({ error: 'Error al enviar la notificación por correo electrónico' });
    }
};

module.exports = notification;
