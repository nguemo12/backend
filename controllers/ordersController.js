'use strict';

const orderData = require('../data/order');

const getAllorders = async (req, res, next) => {
    try {

        const orderlist = await orderData.getorder();
        res.send(orderlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getorder = async (req, res, next) => {
    try {
        const orderId = req.params.id;
        const order = await orderData.getById(orderId);
        res.send(order);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addorder = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await orderData.creatorder(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatorder = async (req, res, next) => {
    try {
        const orderId =  req.params.id;
        const data = req.body;
        const updated = await orderData.updateorder(orderId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteorder = async (req, res, next) => {
    try {
        const orderId = req.params.id;
        const deletedorder = await orderData.deleteorder(orderId);
        res.send(deletedorder);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getCountorders = async (req, res, next) => {
    try {

        const ordercount = await orderData.getCountorder();
        res.send(ordercount);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getAllorders,
    getorder,
    addorder,
    updatorder,
    deleteorder,
    getCountorders
}