'use strict';

const express = require('express');
const brandControll = require('../controllers/brandController');
const router = express.Router();

router.get('/brands', brandControll.getAllbrands);
router.get('/brand/:id', brandControll.getbrand);
router.post('/brand', brandControll.addbrand);
router.put('/brand/:id', brandControll.updatbrand);
router.delete('/brand/:id', brandControll.deletebrand);


module.exports = {
    routes: router
}