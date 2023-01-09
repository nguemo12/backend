'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getcategory = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('category');
        const categoryList = await pool.request().query(sqlQueries.categorylist);
        return categoryList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(categoryId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('category');
        const category = await pool.request()
                            .input('category_Id', sql.Int, categoryId)
                            .query(sqlQueries.categorybyId);
        return category.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatcategory = async (categorydata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('category');
        const insertcategory = await pool.request()
                            .input('category_name', sql.NVarChar(100), categorydata.category_name)
                            
                            
                            .query(sqlQueries.createCategory);                            
        return insertcategory.recordset;
    } catch (error) {
        return error.message;
    }
}

const updatecategory = async (categoryId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('category');
        const update = await pool.request()
        .input('category_name', sql.NVarChar(10), categorydata.category_name)
        
        
                        .query(sqlQueries.updateCategory);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deletecategory = async (categoryId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('category');
        const deletecategory = await pool.request()
                            .input('category_Id', sql.Int, categoryId)
                            .query(sqlQueries.deleteCategory);
        return deletecategory.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getcategory,
    getById,
    creatcategory,
    updatecategory,
    deletecategory
}