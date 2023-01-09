'use strict';

const eventData = require('../data/events');

const getAllEvents = async (req, res, next) => {
    try {

        const eventlist = await eventData.getEvents();
        res.send(eventlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getById(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addEvent = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.creatEvent(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatEvent = async (req, res, next) => {
    try {
        const eventId =  req.params.id;
        const data = req.body;
        const updated = await eventData.updateEvent(eventId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const deletedEvent = await eventData.deleteEvent(eventId);
        console.log(deletedEvent)
        res.json(deletedEvent).status(200);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const countAllEvents = async (req, res, next) => {
    try {

        const countEvents = await eventData.countEvents();
        res.send(countEvents);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const chartAllEvents = async (req, res, next) => {
    try {

        const EventChart = await eventData.EventChart();
        res.send(EventChart);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getAllEvents,
    getEvent,
    addEvent,
    updatEvent,
    deleteEvent,
    countAllEvents,
    chartAllEvents
}