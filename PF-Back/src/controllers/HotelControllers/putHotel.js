/*
===============================================================================================================================
JavaScripFile: putHotel.js
Objetivo:  Archivo que contiene la actualización de datos básicos del hotel.
Autor:  Juan Esteban Valencia 
Creation: 26 de junio 2023
==================================================================
Manifiesto de funciones:
cambiar la forma en que se reciben los datos debemos obtener las keys del objeto enviado por body
=============================
    1-putHotel= Metodo encargado de actualizar los datos básicos del Hotel.
===============================================================================================================================
*/
/* 
TODO se pueden actualizar los siguientes datos:
- name
- images.reception
- images.pool
- images.views.aerial
- images.views.lake
- images.views.garden
- images.views.mountain
- images.views.beach
- images.views.city
- images.restaurant
- images.meeting_room
- images.bar
- images.logo
- translator
- tourist_guide

*/

const Hotel = require('../../models/Hotel');

const putHotel = async (req, res) => {
	try {
		const {
			niu,
			name,
			reception,
			pool,
			aerial,
			lake,
			garden,
			mountain,
			beach,
			city,
			restaurant,
			meeting_room,
			bar,
			logo,
			translator,
			tourist_guide,
		} = req.body;

		if (!niu) throw new Error('Must provide a niu');

		let query = {};

		if (name) query.name = name;

		if (reception) query['images.reception'] = reception;

		if (pool) query['images.pool'] = pool;

		if (aerial) query['images.views.aerial'] = aerial;

		if (lake) query['images.views.lake'] = lake;

		if (garden) query['images.views.garden'] = garden;

		if (mountain) query['images.views.mountain'] = mountain;

		if (beach) query['images.views.beach'] = beach;

		if (city) query['images.views.city'] = city;

		if (restaurant) query['images.restaurant'] = restaurant;

		if (meeting_room) query['images.meeting_room'] = meeting_room;

		if (bar) query['images.bar'] = bar;

		if (logo) query['images.logo'] = logo;

		if (translator) query.translator = translator;

		if (tourist_guide) query.tourist_guide = tourist_guide;

		const hotel = await Hotel.updateOne({ niu }, query);

		res.status(200).json({ message: 'Hotel updated', hotel });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = putHotel;
