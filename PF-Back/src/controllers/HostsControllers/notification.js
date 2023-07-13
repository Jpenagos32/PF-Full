const nodemailer = require('nodemailer');
require('dotenv').config();
const { USER, PASS } = process.env;
const ejs = require('ejs');
const path = require('path');

const notification = async (usrData) => {
	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: USER,
			pass: PASS,
		},
	});

	const { to, subject, text, template } = usrData;

	const templatePath = path.join(
		__dirname,
		'.',
		'TemplateNotifications',
		template
	);
	const mailOptions = {
		from: USER,
		to,
		subject,
		text,
		html: await ejs.renderFile(templatePath),
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
// 	to: 'jpdelgado9641@gmail.com',
// 	subject: 'Reservation has been created',
// 	text: 'Thanks for your reservation.',
// 	template: 'notification.ejs'
// };

//notification(userData);

module.exports = notification;
