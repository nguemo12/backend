'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getcustomer = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('customer');
        const customerList = await pool.request().query(sqlQueries.customerlist);
        return customerList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(customerId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('customer');
        const customer = await pool.request()
                            .input('customer_Id', sql.Int, customerId)
                            .query(sqlQueries.customerbyId);
        return customer.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatcustomer = async (customerdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('customer');
        const insertcustomer = await pool.request()
                            .input('first_name', sql.NVarChar(100), customerdata.first_name)
                            .input('last_name', sql.NVarChar(100), customerdata.last_name)
                            .input('phone', sql.NVarChar(100), customerdata.phone)
                            .input('email', sql.NVarChar(100), customerdata.email)
                            .input('street', sql.NVarChar(100), customerdata.street)
                            .input('city', sql.NVarChar(100), customerdata.city)
                            .input('state', sql.NVarChar(100), customerdata.state)
                            .input('zip_code', sql.NVarChar(100), customerdata.zip_code)
                            .query(sqlQueries.createCustomer);                            
        return insertcustomer.recordset;
    } catch (error) {
        return error.message;
    }
}

const updatecustomer = async (customerId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('customer');
        const update = await pool.request()
        .input('first_name', sql.NVarChar(100), customerdata.first_name)
        .input('last_name', sql.NVarChar(100), customerdata.last_name)
        .input('phone', sql.NVarChar(100), customerdata.phone)
        .input('email', sql.NVarChar(100), customerdata.email)
        .input('street', sql.NVarChar(100), customerdata.street)
        .input('city', sql.NVarChar(100), customerdata.city)
        .input('state', sql.NVarChar(100), customerdata.state)
        .input('zip_code', sql.NVarChar(100), customerdata.zip_code)
        .query(sqlQueries.updateCustomer);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deletecustomer = async (customerId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('customer');
        const deletecustomer = await pool.request()
                            .input('customer_Id', sql.Int, customerId)
                            .query(sqlQueries.deleteCustomer);
        return deletecustomer.recordset;
    } catch (error) {
        return error.message;
    }
}
const countCustomer = async() =>{

    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('customer');
        const countCustomer = await pool.request().query(sqlQueries.countCustomer);
        return countCustomer.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getcustomer,
    getById,
    creatcustomer,
    updatecustomer,
    deletecustomer,
    countCustomer
}