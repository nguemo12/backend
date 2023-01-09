'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const eventsList = await pool.request().query(sqlQueries.eventslist);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const event = await pool.request()
                            .input('eventId', sql.Int, eventId)
                            .query(sqlQueries.eventbyId);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatEvent = async (eventdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertEvent = await pool.request()
                            .input('product_name', sql.NVarChar(100), eventdata.product_name)
                            .input('brand_id', sql.Int, eventdata.brand_id)
                            .input('category_id', sql.Int, eventdata.category_id)
                            .input('model_year', sql.SmallInt, eventdata.model_year)
                            .input('list_price', sql.Int, eventdata.list_price)
                            // .input('maxMembers', sql.Int, eventdata.maxMembers)
                            .query(sqlQueries.createEvent);                            
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateEvent = async (eventId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
        .input('product_name', sql.NVarChar(10), eventdata.eventTitle)
        .input('brand_id', sql.Int, eventdata.eventDescription)
        .input('category_id', sql.Int, eventdata.startDate)
        .input('model_year', sql.SmallInt, eventdata.endDate)
        .input('list_price', sql.Int, eventdata.avenue)
                        .query(sqlQueries.updateEvent);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteEvent = async (product_Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const deleteEvent = await pool.request()
                            .input('product_Id', sql.Int, product_Id)
                            .query(sqlQueries.deleteEvent);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}
const countEvents = async() =>{

    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const countEvents = await pool.request().query(sqlQueries.countEvents);
        return countEvents.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
const EventChart = async() =>{

    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const EventChart = await pool.request().query(sqlQueries.ChartEvent);
        return EventChart.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = {
    getEvents,
    getById,
    creatEvent,
    updateEvent,
    deleteEvent,
    countEvents,
    EventChart
}