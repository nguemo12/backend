'use strict';

const express = require('express');
const stockControll = require('../controllers/stockController');
const router = express.Router();

router.get('/stocks', stockControll.getAllstocks);
router.get('/stock/:id', stockControll.getstock);
router.post('/stock', stockControll.addstock);
router.put('/stock/:id', stockControll.updatstock);
router.delete('/stock/:id', stockControll.deletestock);


module.exports = {
    routes: router
}