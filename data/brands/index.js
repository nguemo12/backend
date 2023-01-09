'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getBrand = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('brand');
        const brandList = await pool.request().query(sqlQueries.brandlist);
        return brandList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(brandId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('brand');
        const brand = await pool.request()
                            .input('brand_Id', sql.Int, brandId)
                            .query(sqlQueries.brandbyId);
        return brand.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatbrand = async (branddata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('brand');
        const insertbrand = await pool.request()
                            .input('brand_name', sql.NVarChar(100), branddata.brand_name)
                            
                            // .input('maxMembers', sql.Int, branddata.maxMembers)
                            .query(sqlQueries.CreateBrand);                            
        return insertbrand.recordset;
    } catch (error) {
        return error.message;
    }
}

const updatebrand = async (brandId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('brand');
        const update = await pool.request()
        .input('brand_name', sql.NVarChar(10), branddata.brand_name)
        
        
                        .query(sqlQueries.updateBrand);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deletebrand = async (brandId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('brand');
        const deletebrand = await pool.request()
                            .input('brand_Id', sql.Int, brandId)
                            .query(sqlQueries.deleteBrand);
        return deletebrand.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getBrand,
    getById,
    creatbrand,
    updatebrand,
    deletebrand
}