'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getstaff = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('staff');
        const staffList = await pool.request().query(sqlQueries.stafflist);
        return staffList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(staffId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('staff');
        const staff = await pool.request()
                            .input('staff_Id', sql.Int, staffId)
                            .query(sqlQueries.staffbyId);
        return staff.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatstaff = async (staffdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('staff');
        const insertstaff = await pool.request()
                            .input('first_name', sql.NVarChar(100), staffdata.first_name)
                            .input('last_name', sql.NVarChar(100), staffdata.last_name)
                            .input('email', sql.NVarChar(100), staffdata.email)
                            .input('phone', sql.NVarChar(100), staffdata.phone)
                            .input('active', sql.TinyInt, staffdata.active)
                            .input('store_id', sql.Int, staffdata.store_id)
                            .input('manager_id', sql.Int, staffdata.manager_id)
                            .query(sqlQueries.createStaff);                            
        return insertstaff.recordset;
    } catch (error) {
        return error.message;
    }
}

const updatestaff = async (staffId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('staff');
        const update = await pool.request()
        .input('first_name', sql.NVarChar(100), staffdata.first_name)
        .input('last_name', sql.NVarChar(100), staffdata.last_name)
        .input('email', sql.NVarChar(100), staffdata.email)
        .input('phone', sql.NVarChar(100), staffdata.phone)
        .input('active', sql.TinyInt, staffdata.active)
        .input('store_id', sql.Int, staffdata.store_id)
        .input('manager_id', sql.Int, staffdata.manager_id)
        .query(sqlQueries.updateStaff);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deletestaff = async (staffId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('staff');
        const deletestaff = await pool.request()
                            .input('staff_Id', sql.Int, staffId)
                            .query(sqlQueries.deleteStaff);
        return deletestaff.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getstaff,
    getById,
    creatstaff,
    updatestaff,
    deletestaff
}