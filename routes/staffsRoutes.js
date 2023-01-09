'use strict';

const express = require('express');
const staffControll = require('../controllers/staffsController');
const router = express.Router();

router.get('/staffs', staffControll.getAllstaffs);
router.get('/staff/:id', staffControll.getstaff);
router.post('/staff', staffControll.addstaff);
router.put('/staff/:id', staffControll.updatstaff);
router.delete('/staff/:id', staffControll.deletestaff);


module.exports = {
    routes: router
}