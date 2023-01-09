'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getStore = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('store');
        const storeList = await pool.request().query(sqlQueries.storelist);
        return storeList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(storeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('store');
        const store = await pool.request()
                            .input('store_Id', sql.Int, storeId)
                            .query(sqlQueries.storebyId);
        return store.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatstore = async (storedata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('store');
        const insertstore = await pool.request()
                            
                            .input('store_name', sql.NVarChar(100), storedata.store_name)
                            .input('phone', sql.NVarChar(100), storedata.phone)
                            .input('email', sql.NVarChar(100), storedata.email)
                            .input('street', sql.NVarChar(100), storedata.street)
                            .input('city', sql.NVarChar(100), storedata.city)
                            .input('state', sql.NVarChar(100), storedata.state)
                            .input('zip_code', sql.NVarChar(100), storedata.zip_code)
                            .query(sqlQueries.createstore);                            
        return insertstore.recordset;
    } catch (error) {
        return error.message;
    }
}

const updatestore = async (storeId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('store');
        const update = await pool.request()
        .input('store_name', sql.NVarChar(100), storedata.store_name)
        .input('phone', sql.NVarChar(100), storedata.phone)
        .input('email', sql.NVarChar(100), storedata.email)
        .input('street', sql.NVarChar(100), storedata.street)
        .input('city', sql.NVarChar(100), storedata.city)
        .input('state', sql.NVarChar(100), storedata.state)
        .input('zip_code', sql.NVarChar(100), storedata.zip_code)
        .query(sqlQueries.updatestore);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deletestore = async (storeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('store');
        const deletestore = await pool.request()
                            .input('store_Id', sql.Int, storeId)
                            .query(sqlQueries.deletestore);
        return deletestore.recordset;
    } catch (error) {
        return error.message;
    }
}
const getCountStore = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('store');
        const storecount = await pool.request().query(sqlQueries.countStore);
        return storecount.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getStore,
    getById,
    creatstore,
    updatestore,
    deletestore,
    getCountStore
}