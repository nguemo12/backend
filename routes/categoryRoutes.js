'use strict';

const express = require('express');
const categoryControll = require('../controllers/categoryController');
const router = express.Router();

router.get('/categorys', categoryControll.getAllcategorys);
router.get('/category/:id', categoryControll.getcategory);
router.post('/category', categoryControll.addcategory);
router.put('/category/:id', categoryControll.updatcategory);
router.delete('/category/:id', categoryControll.deletecategory);


module.exports = {
    routes: router
}