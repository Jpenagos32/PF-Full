const Payments = require('../../models/Payments')
const { mercadopago } = require('../../utils/mercadoPago')

const postPayments = async (req, res) => {
    try {
        const { name, last_name, email, roomId, price, room_description } = req.body;

        const newPayment = new Payments({
            name,
            last_name,
            email,
            _id: roomId,
        });

        await newPayment.save();

        const preference = {
            items: [
                {
                    title: room_description,
                    unit_price: price,
                },
            ],
        };

        const response = await mercadopago.preferences.create(preference);
        const { id, init_point } = response.body;

        newPayment.payment_id = id;
        await newPayment.save();

        res.status(200).json({ init_point });
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar el pago' });
    }
};

module.exports = postPayments;
