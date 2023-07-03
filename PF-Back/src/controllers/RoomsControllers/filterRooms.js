const Room = require('../../models/Room');
const Host = require('../../models/Hosts');

const filterRooms = async (req, res) => {
	try {
		const {
			price,
			room_type,
			facilities,
			capacity,
			check_in_date,
			check_out_date,
		} = req.body;

		const query = {
			available: true,
		};

		const hostQuery = {};

		if (check_in_date) hostQuery.check_in_date = check_in_date;

		if (check_out_date) hostQuery.check_out_date = check_out_date;

		if (price) query.price = { $gte: price };

		if (room_type) query.room_type = room_type;

		if (facilities) {
			let facilitiesArray = [];
			facilities.forEach((element) => {
				facilitiesArray.push(element);
			});
			query.facilities = { $in: facilitiesArray };
		}

		if (capacity) query.capacity = { $gte: capacity };

		let filteredHost;
		if (check_in_date || check_out_date) {
			filteredHost = await Host.find(hostQuery);
		}
		const allRooms = await Room.find(query);

		res.status(200).json({ allRooms, filteredHost });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = filterRooms;
