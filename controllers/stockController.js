'use strict';

const stockData = require('../data/stock');

const getAllstocks = async (req, res, next) => {
    try {

        const stocklist = await stockData.getstock();
        res.send(stocklist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getstock = async (req, res, next) => {
    try {
        const stockId = req.params.id;
        const stock = await stockData.getById(stockId);
        res.send(stock);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addstock = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await stockData.creatstock(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatstock = async (req, res, next) => {
    try {
        const stockId =  req.params.id;
        const data = req.body;
        const updated = await stockData.updatestock(stockId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletestock = async (req, res, next) => {
    try {
        const stockId = req.params.id;
        const deletedstock = await stockData.deletestock(stockId);
        res.send(deletedstock);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllstocks,
    getstock,
    addstock,
    updatstock,
    deletestock
}