const nodemailer = require('nodemailer');
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


module.exports = notification;
