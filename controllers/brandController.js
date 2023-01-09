'use strict';

const brandData = require('../data/brand');

const getAllbrands = async (req, res, next) => {
    try {

        const brandlist = await brandData.getBrand();
        res.send(brandlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getbrand = async (req, res, next) => {
    try {
        const brandId = req.params.id;
        const brand = await brandData.getById(brandId);
        res.send(brand);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addbrand = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await brandData.creatbrand(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatbrand = async (req, res, next) => {
    try {
        const brandId =  req.params.id;
        const data = req.body;
        const updated = await brandData.updatebrand(brandId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletebrand = async (req, res, next) => {
    try {
        const brandId = req.params.id;
        const deletedbrand = await brandData.deletebrand(brandId);
        res.send(deletedbrand);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllbrands,
    getbrand,
    addbrand,
    updatbrand,
    deletebrand
}