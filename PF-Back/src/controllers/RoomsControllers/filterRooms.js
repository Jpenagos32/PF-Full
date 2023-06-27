const Room = require('../../models/Room');

const filterRooms = async (req, res) => {
    try {
        const { price, room_type, facilities } = req.body;
        const query = {}
        console.log(price);
        if (price) {
            query.price = price
        }
        if (room_type) {
            query.room_type = room_type
        }
        if (facilities) {
            let facilitiesArray = [];
            facilities.forEach((element) => {
                facilitiesArray.push(element);
            });
            query.facilities = { $in: facilitiesArray };
        }
        const filteredRooms = await Room.find(query)
        res.status(200).json(filteredRooms)
    } catch (error) {
        res.status(402).json({ error: error.message })
    }
}

module.exports = filterRooms;