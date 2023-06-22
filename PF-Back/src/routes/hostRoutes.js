const express = require('express')
const hostRoutes = express.Router()

const deleteHost = require('../controllers/deleteHost')
const deleteReservation = require('../controllers/deleteReservation')
const getHostById = require('../controllers/getHostById')
const postReservation = require('../controllers/postReservation')
const putHost = require('../controllers/putHost')
const putReservation = require('../controllers/putReservation')
const postHost = require('../controllers/postHost')

hostRoutes.delete('/deleteReservation',deleteReservation)
hostRoutes.put('/putReservation', putReservation)
hostRoutes.post('/reservation', postReservation)
hostRoutes.get('/getHostById', getHostById)
hostRoutes.post('/postHost', postHost)
hostRoutes.delete('/deleteHost', deleteHost)
hostRoutes.put('/putHost', putHost)

module.exports = hostRoutes
