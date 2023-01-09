'use strict';

const orderitemData = require('../data/orderitem');

const getAllorderitems = async (req, res, next) => {
    try {

        const orderitemlist = await orderitemData.getorderitem();
        res.send(orderitemlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getorderitem = async (req, res, next) => {
    try {
        const orderitemId = req.params.id;
        const orderitem = await orderitemData.getById(orderitemId);
        res.send(orderitem);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addorderitem = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await orderitemData.creatorderitem(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatorderitem = async (req, res, next) => {
    try {
        const orderitemId =  req.params.id;
        const data = req.body;
        const updated = await orderitemData.updateorderitem(orderitemId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteorderitem = async (req, res, next) => {
    try {
        const orderitemId = req.params.id;
        const deletedorderitem = await orderitemData.deleteorderitem(orderitemId);
        res.send(deletedorderitem);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllorderitems,
    getorderitem,
    addorderitem,
    updatorderitem,
    deleteorderitem
}