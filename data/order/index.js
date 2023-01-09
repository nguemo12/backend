'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getorder = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order');
        const orderList = await pool.request().query(sqlQueries.orderlist);
        return orderList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(orderId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order');
        const order = await pool.request()
                            .input('order_Id', sql.Int, orderId)
                            .query(sqlQueries.orderbyId);
        return order.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatorder = async (orderdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order');
        const insertorder = await pool.request()
                            .input('customer_id', sql.Int, orderdata.customer_id)
                            .input('order_status', sql.TinyInt, orderdata.order_status)
                            .input('order_date', sql.Date, orderdata.order_date)
                            .input('required_date', sql.Date, orderdata.required_date)
                            .input('shipped_date', sql.Date, orderdata.shipped_date)
                            .input('store_id', sql.Int, orderdata.store_id)
                            
                            .query(sqlQueries.createorder);                            
        return insertorder.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateorder = async (orderId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order');
        const update = await pool.request()
        .input('customer_id', sql.Int, orderdata.customer_id)
        .input('order_status', sql.TinyInt, orderdata.order_status)
        .input('order_date', sql.Date, orderdata.order_date)
        .input('required_date', sql.Date, orderdata.required_date)
        .input('shipped_date', sql.Date, orderdata.shipped_date)
        .input('store_id', sql.Int, orderdata.store_id)
        .query(sqlQueries.updateorder);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteorder = async (orderId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order');
        const deleteorder = await pool.request()
                            .input('order_Id', sql.Int, orderId)
                            .query(sqlQueries.deleteorder);
        return deleteorder.recordset;
    } catch (error) {
        return error.message;
    }
}
const getCountorder = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order');
        const ordercount = await pool.request().query(sqlQueries.countOrder);
        return ordercount.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getorder,
    getById,
    creatorder,
    updateorder,
    deleteorder,
    getCountorder
}