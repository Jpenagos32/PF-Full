const NewPayments = require('../../models/NewPayments');
const Host = require('../../models/Hosts');
const { mercadopago } = require('../../utils/mercadoPago');

const postPayments = async (req, res) => {
	try {
		const { identification, total } = req.body;
		console.log("identification-> ", identification)
		if (!identification) throw new Error('Must be provider identification');

		let roomPay = await NewPayments.findOne({ identification });
		console.log('registro de pago->', roomPay);
		if (roomPay === null) {
			roomPay = new NewPayments({
				identification,
			});
			await roomPay.save();
		}

		const host = await Host.findOne({ identification });
		console.log("huesped-> ", host)
		if (!host) {
			return res.status(404).json({ error: 'Unregistered user' });
		}

		const { reservations } = host;
		console.log("nombre de habitacion -> ", reservations[reservations.length - 1].room_name)
		const preference = {
			items: [
				{
					title: reservations[reservations.length - 1].room_name,
					unit_price: total,
					quantity: 1,
				},
			],
			back_urls: {
				// success: 'http://localhost:3001/payments/success',
				// failure: 'http://localhost:3001/payments/failure',
				success:
					'https://sunsetsandsdev.adaptable.app/payments/success',
				failure:
					'https://sunsetsandsdev.adaptable.app/payments/failure',
			},
		};

		const response = await mercadopago.preferences.create(preference);
		const { id, init_point, date_created } = response.body;

		if (roomPay.date_created) {
			const newPay = new NewPayments({
				identification,
				ref_mp: id,
				date_created,
			});
			newPay.save();
			return res.status(200).json({ init_point });
		}

		await NewPayments.findOneAndUpdate(
			{ identification },
			{ ref_mp: id, date_created: date_created }
		);
		await roomPay.save();
		res.status(200).json({ init_point });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = postPayments;
