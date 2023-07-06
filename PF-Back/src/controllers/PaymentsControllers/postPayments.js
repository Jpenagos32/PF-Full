const NewPayments = require('../../models/NewPayments');
const Host = require('../../models/Hosts');
const { mercadopago } = require('../../utils/mercadoPago');

const postPayments = async (req, res) => {
	try {
		const { identification, total } = req.body;
		console.log("identification-> ",identification)
		if (!identification) throw new Error('Must be provider identification');
		let roomPay = await NewPayments.findOne({ identification });
		console.log("registro de pago->",roomPay);
		if(roomPay===null){
			roomPay = new NewPayments({
				identification
			});
			await roomPay.save();
		}
		
		if(roomPay.status === "approved"){
			
				return res
					.status(200)
					.json({ message: 'The payment has already been arpove' });
			
		}
		if(roomPay.status==="in progress" || "rejected"){

		 const host = await Host.findOne({ identification });
		 if (!host) {
			return res.status(404).json({ error: 'Unregistered user' });
		 }
		 const { room_details } = host;
		 console.log(room_details.room_type)
		 const preference = {
			 items: [
				{
					title: room_details.room_type,
					unit_price: total,
					quantity: 1,
				},
			 ],
			 back_urls: {
				success:
					'http://localhost:3001/payments/success',
				failure:
					'http://localhost:3001/payments/failure',
				// success:
				// 	'https://sunsetsandsdev.adaptable.app/payments/success',
				// failure:
				// 	'https://sunsetsandsdev.adaptable.app/payments/failure',
			 },
		   };
		 const response = await mercadopago.preferences.create(preference);
		 const { id, init_point } = response.body;
		 await NewPayments.findOneAndUpdate ({identification},{ref_mp: id});
		 await roomPay.save();
		 res.status(200).json({ init_point });
	    }

	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = postPayments;
