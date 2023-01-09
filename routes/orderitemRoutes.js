'use strict';

const express = require('express');
const orderitemControll = require('../controllers/orderitemsController');
const router = express.Router();

router.get('/orderitems', orderitemControll.getAllorderitems);
router.get('/orderitem/:id', orderitemControll.getorderitem);
router.post('/orderitem', orderitemControll.addorderitem);
router.put('/orderitem/:id', orderitemControll.updatorderitem);
router.delete('/orderitem/:id', orderitemControll.deleteorderitem);


module.exports = {
    routes: router
}