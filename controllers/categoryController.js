'use strict';

const categoryData = require('../data/category');

const getAllcategorys = async (req, res, next) => {
    try {

        const categorylist = await categoryData.getcategory();
        res.send(categorylist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getcategory = async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const category = await categoryData.getById(categoryId);
        res.send(category);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addcategory = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await categoryData.creatcategory(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatcategory = async (req, res, next) => {
    try {
        const categoryId =  req.params.id;
        const data = req.body;
        const updated = await categoryData.updatecategory(categoryId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletecategory = async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const deletedcategory = await categoryData.deletecategory(categoryId);
        res.send(deletedcategory);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllcategorys,
    getcategory,
    addcategory,
    updatcategory,
    deletecategory
}