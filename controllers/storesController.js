'use strict';

const storeData = require('../data/store');

const getAllstores = async (req, res, next) => {
    try {

        const storelist = await storeData.getStore();
        res.send(storelist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getstore = async (req, res, next) => {
    try {
        const storeId = req.params.id;
        const store = await storeData.getById(storeId);
        res.send(store);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addstore = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await storeData.creatstore(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatstore = async (req, res, next) => {
    try {
        const storeId =  req.params.id;
        const data = req.body;
        const updated = await storeData.updatestore(storeId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletestore = async (req, res, next) => {
    try {
        const storeId = req.params.id;
        const deletedstore = await storeData.deletestore(storeId);
        res.send(deletedstore);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getcountstores = async (req, res, next) => {
    try {

        const countlist = await storeData.getCountStore();
        res.send(countlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllstores,
    getstore,
    addstore,
    updatstore,
    deletestore,
    getcountstores
}