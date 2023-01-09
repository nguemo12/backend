'use strict';

const express = require('express');
const storeControll = require('../controllers/storesController');
const router = express.Router();

router.get('/stores', storeControll.getAllstores);
router.get('/store/:id', storeControll.getstore);
router.post('/store', storeControll.addstore);
router.put('/store/:id', storeControll.updatstore);
router.delete('/store/:id', storeControll.deletestore);
router.get('/storescount', storeControll.getcountstores);


module.exports = {
    routes: router
}