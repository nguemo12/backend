'use strict';

const express = require('express');
const customerControll = require('../controllers/customersController');
const router = express.Router();

router.get('/customers', customerControll.getAllcustomers);
router.get('/customer/:id', customerControll.getcustomer);
router.post('/customer', customerControll.addcustomer);
router.put('/customer/:id', customerControll.updatcustomer);
router.delete('/customer/:id', customerControll.deletecustomer);
router.get('/customercount',customerControll.countAllCustomers);

module.exports = {
    routes: router
}