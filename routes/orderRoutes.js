'use strict';

const express = require('express');
const orderControll = require('../controllers/ordersController');
const router = express.Router();

router.get('/orders', orderControll.getAllorders);
router.get('/order/:id', orderControll.getorder);
router.post('/order', orderControll.addorder);
router.put('/order/:id', orderControll.updatorder);
router.delete('/order/:id', orderControll.deleteorder);
router.get('/countorders', orderControll.getCountorders);

module.exports = {
    routes: router
}