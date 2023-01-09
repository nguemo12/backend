'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getorderitem = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orderitem');
        const orderitemList = await pool.request().query(sqlQueries.orderitemlist);
        return orderitemList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(orderitemId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orderitem');
        const orderitem = await pool.request()
                            .input('orderitem_Id', sql.Int, orderitemId)
                            .query(sqlQueries.orderitembyId);
        return orderitem.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatorderitem = async (orderitemdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orderitem');
        const insertorderitem = await pool.request()
        .input('order_id', sql.Int, orderitemdata.order_id)
        .input('item_id', sql.TinyInt, orderitemdata.item_id)
        .input('product_id', sql.Int, orderitemdata.product_id)
        .input('quantity', sql.Int, orderitemdata.quantity)
        .input('list_price', sql.Decimal(10,2), orderitemdata.list_price)
        .input('discount', sql.Decimal(4,2), orderitemdata.discount)
                            
                            .query(sqlQueries.createorderitem);                            
        return insertorderitem.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateorderitem = async (orderitemId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orderitem');
        const update = await pool.request()
        .input('order_id', sql.Int, orderitemdata.order_id)
        .input('item_id', sql.TinyInt, orderitemdata.item_id)
        .input('product_id', sql.Int, orderitemdata.product_id)
        .input('quantity', sql.Int, orderitemdata.quantity)
        .input('list_price', sql.Decimal(10,2), orderitemdata.list_price)
        .input('discount', sql.Decimal(4,2), orderitemdata.discount)
        .query(sqlQueries.updateorderitem);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteorderitem = async (orderitemId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orderitem');
        const deleteorderitem = await pool.request()
                            .input('orderitem_Id', sql.Int, orderitemId)
                            .query(sqlQueries.deleteorderitem);
        return deleteorderitem.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getorderitem,
    getById,
    creatorderitem,
    updateorderitem,
    deleteorderitem
}