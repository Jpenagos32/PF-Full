/*
===============================================================================================================================
JavaScripFile: adminRooms.js
Objetivo:  Archivo que contiene el controlador para poder obtener todas las habitaciones
Autor: Julian Penagos, Sofia Vila, Juan Valencia, Juan Delgado
Creation: 23 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 adminRooms: Funcion que permite obtener las habitaciones si no se provee nada por req.body envia una habitación por cada tipo
===============================================================================================================================
*/
const Rooms = require('../../models/Room');

const adminRooms = async (req, res) => {
    const {room_number} = req.query;
    try {
        if(room_number){
            const room = await Rooms.findOne({room_number});
            if(!room){
               return res.status(402).send("No room found");
            }
            return res.status(200).json({room});
        }else{
        const adminsRooms = await Rooms.find()
        res.status(200).json({ adminsRooms });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = adminRooms;
