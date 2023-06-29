const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
require('dotenv').config();
const { USER, PASS } = process.env;

const notification = async (usrData) => {
	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: USER,
			pass: PASS,
		},
	});
	const { to, subject, text } = usrData;
	const mailOptions = {
		from: USER,
		to,
		subject,
		text,
	};
	await transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			throw new Error('Error sending E-mail');
		} else {
			console.log('E-mail sent successfully');
		}
	});
};

// const userData = {
// 	to: 'jpenagos32@gmail.com',
// 	subject: 'Reservation created',
// 	text: 'Su reservación ha sido creada porfavor dirijase al siguiente enlace para pagar',
// };

// notification(userData);

module.exports = notification;
