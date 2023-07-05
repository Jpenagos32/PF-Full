
const NewPayments = require('../../models/NewPayments');
const Host = require("../../models/Hosts");
const notification = require("../HostsControllers/notification");

//PAGO EXITOSO
const successPayment = async (req, res) => {
    try {
        const { preference_id } = req.query;
        const payment = await NewPayments.findOneAndUpdate({ ref_mp: preference_id },{status:'approved'});
        await payment.save();
        const host = await Host.findOne({identification:payment.identification});
        
        const hostNotification = {
            to: host.contact.email,
            subject: 'failure',
            text: 'the payment has been approved',
            
           }

           notification(hostNotification);

        res.status(200).json({ message: 'Payment successful' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = successPayment;