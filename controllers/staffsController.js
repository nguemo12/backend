'use strict';

const staffData = require('../data/staff');

const getAllstaffs = async (req, res, next) => {
    try {

        const stafflist = await staffData.getstaff();
        res.send(stafflist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getstaff = async (req, res, next) => {
    try {
        const staffId = req.params.id;
        const staff = await staffData.getById(staffId);
        res.send(staff);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addstaff = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await staffData.creatstaff(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatstaff = async (req, res, next) => {
    try {
        const staffId =  req.params.id;
        const data = req.body;
        const updated = await staffData.updatestaff(staffId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletestaff = async (req, res, next) => {
    try {
        const staffId = req.params.id;
        const deletedstaff = await staffData.deletestaff(staffId);
        res.send(deletedstaff);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllstaffs,
    getstaff,
    addstaff,
    updatstaff,
    deletestaff
}