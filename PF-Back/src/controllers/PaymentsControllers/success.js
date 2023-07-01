const e = require('express');
const NewPayments = require('../../models/NewPayments');
const { mercadopago } = require('../../utils/mercadoPago');

//PAGO EXITOSO
const successPayment = async (req, res) => {
    try {
        const { preference_id } = req.query;
        const payment = await NewPayments.findOneAndUpdate({ ref_mp: preference_id },{status:'approved'});
        await payment.save();
        res.status(200).json({ message: 'Payment successful' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = successPayment;