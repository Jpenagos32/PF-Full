const NewPayments = require('../../models/NewPayments')
const Host = require('../../models/Hosts')
const { mercadopago } = require('../../utils/mercadoPago')

const postPayments = async (req, res) => {
    try {
        const { identification } = req.body;
        if (!identification) throw new Error('Must be provider identification')
        const roomPay = await NewPayments.findOne({ identification })
        if (roomPay) {
            return res.status(200).json({ message: 'The payment has already been registered' })
        }
        const host = await Host.findOne({ identification })
        if (!host) {
            return res.status(404).json({ error: 'Unregistered user' })
        }
        const { room_details } = host
        const preference = {
            items: [
                {
                    title: room_details.room_name,
                    unit_price: room_details.room_price,
                    quantity: 1
                },
            ],
            back_urls: {
                success: 'http://localhost:3001/payments/success',
                failure: 'http://localhost:3001/payments/failure'
            },
        };
        const response = await mercadopago.preferences.create(preference);
        const { id, init_point } = response.body;
        const newPayment = new NewPayments({
            ref_mp: id,
        });
        await newPayment.save();
        res.status(200).json({ init_point });
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar el pago' });
    }
};

module.exports = postPayments;
