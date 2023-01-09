'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getstock = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('stock');
        const stockList = await pool.request().query(sqlQueries.stocklist);
        return stockList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(stockId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('stock');
        const stock = await pool.request()
                            .input('store_Id', sql.Int, stockId)
                            .query(sqlQueries.stockbyId);
        return stock.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatstock = async (stockdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('stock');
        const insertstock = await pool.request()
                            .input('store_id', sql.Int, stockdata.store_id)
                            .input('product_id', sql.Int, stockdata.product_id)
                            .input('quantity', sql.Int, stockdata.quantity)
                            // .input('maxMembers', sql.Int, stockdata.maxMembers)
                            .query(sqlQueries.createStock);                            
        return insertstock.recordset;
    } catch (error) {
        return error.message;
    }
}

const updatestock = async (stockId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('stock');
        const update = await pool.request()
                            .input('store_id', sql.Int, stockdata.store_id)
                            .input('product_id', sql.Int, stockdata.product_id)
                            .input('quantity', sql.Int, stockdata.quantity)
        
        
                            .query(sqlQueries.updateStock);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deletestock = async (stockId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('stock');
        const deletestock = await pool.request()
                            .input('stock_Id', sql.Int, stockId)
                            .query(sqlQueries.deleteStock);
        return deletestock.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getstock,
    getById,
    creatstock,
    updatestock,
    deletestock
}