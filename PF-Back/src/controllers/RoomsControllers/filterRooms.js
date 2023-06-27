const Room = require('../../models/Room');

const filterRooms = async (req, res) => {
	try {
		const { price, room_type, facilities, capacity } = req.body;
		const query = {
			available: true,
		};

		if (price) {
			query.price = { $gte: price };
		}

		if (room_type) {
			query.room_type = room_type;
		}

		if (facilities) {
			let facilitiesArray = [];
			facilities.forEach((element) => {
				facilitiesArray.push(element);
			});
			query.facilities = { $in: facilitiesArray };
		}

		if (capacity) {
			query.capacity = { $gte: capacity };
		}

		const filteredRooms = await Room.find(query);
		res.status(200).json(filteredRooms);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = filterRooms;
