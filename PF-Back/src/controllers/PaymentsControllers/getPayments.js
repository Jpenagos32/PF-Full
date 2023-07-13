const NewPayments = require("../../models/NewPayments");


const getPayments = async (req, res) => {
    try{
        const allPayments = await NewPayments.find();
        if(allPayments.length===0) return res.status(404).send("Not payments");
        res.status(200).json({allPayments});
    }catch(error){
        res.send(error.message);
    }
};

module.exports = getPayments