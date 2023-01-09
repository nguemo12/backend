'use strict';

const customerData = require('../data/customer');

const getAllcustomers = async (req, res, next) => {
    try {

        const customerlist = await customerData.getcustomer();
        res.send(customerlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getcustomer = async (req, res, next) => {
    try {
        const customerId = req.params.id;
        const customer = await customerData.getById(customerId);
        res.send(customer);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addcustomer = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await customerData.creatcustomer(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatcustomer = async (req, res, next) => {
    try {
        const customerId =  req.params.id;
        const data = req.body;
        const updated = await customerData.updatecustomer(customerId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletecustomer = async (req, res, next) => {
    try {
        const customerId = req.params.id;
        const deletedcustomer = await customerData.deletecustomer(customerId);
        res.send(deletedcustomer);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const countAllCustomers = async (req, res, next) => {
    try {

        const countCustomer = await customerData.countCustomer();
        res.send(countCustomer);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllcustomers,
    getcustomer,
    addcustomer,
    updatcustomer,
    deletecustomer,
    countAllCustomers

}