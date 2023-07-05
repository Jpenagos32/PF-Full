const NewPayments = require('../../models/NewPayments');
const Host = require("../../models/Hosts");
const notification = require("../HostsControllers/notification");

const failurePayment = async (req, res) => {
    try {
        const { preference_id } = req.query;
        const payment = await NewPayments.findOneAndUpdate({ ref_mp: preference_id }, { status: 'rejected' });
        await payment.save();
        const host = await Host.findOne({identification:payment.identification});
        
        const hostNotification = {
            to: host.contact.email,
            subject: 'failure',
            text: 'payment has been declined',
            template:'pagofallido.ejs'
           }

           notification(hostNotification);

        res.status(200).json({ message: 'Rejected' })
    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports = failurePayment;