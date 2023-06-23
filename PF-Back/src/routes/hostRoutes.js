const express = require('express')
const hostRoutes = express.Router()

const deleteHost = require('../controllers/deleteHost')
const deleteReservation = require('../controllers/deleteReservation')
const getHostById = require('../controllers/getHostById')
const postReservation = require('../controllers/postReservation')
const putHost = require('../controllers/putHost')
const putReservation = require('../controllers/putReservation')
const postHost = require('../controllers/postHost')

hostRoutes.delete('/reservation/:id', deleteReservation)
hostRoutes.put('/reservation', putReservation)
hostRoutes.post('/reservation', postReservation)
hostRoutes.get('/:id', getHostById)
hostRoutes.post('/', postHost)
hostRoutes.delete('/:id', deleteHost)
hostRoutes.put('/', putHost)

module.exports = hostRoutes
