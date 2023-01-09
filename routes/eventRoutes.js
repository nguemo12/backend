'use strict';

const express = require('express');
const eventControll = require('../controllers/eventController');
const router = express.Router();

router.get('/events', eventControll.getAllEvents);
router.get('/event/:id', eventControll.getEvent);
router.post('/event', eventControll.addEvent);
router.put('/event/:id', eventControll.updatEvent);
router.delete('/event/:id', eventControll.deleteEvent);
router.get('/eventsCount', eventControll.countAllEvents);
router.get('/chartEvent', eventControll.chartAllEvents);


module.exports = {
    routes: router
}