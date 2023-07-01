const NewPayments = require('../../models/NewPayments');

const failurePayment = async (req, res) => {
    try {
        const { preference_id } = req.query;
        const payment = await NewPayments.findOneAndUpdate({ ref_mp: preference_id }, { status: 'rejected' });
        await payment.save();
        res.status(200).json({ message: 'Rejected' })
    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports = failurePayment;