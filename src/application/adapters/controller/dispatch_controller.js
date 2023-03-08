const express = require('express');
const routes = express.Router();
const _meditation = require('../persistence/medication_persistence');
const _drones = require('../persistence/drone_persistence');
const validator = require('../../validators/validators');

routes.get('/drones', async (req, res) => {
    const drones = await _drones.find();

    if (!drones) res.send({ message: 'There is no drones to show' });

    res.send(drones);
});

routes.post('/create-dron', async (req, res) => {
    console.log(req.body);
    
    const { name, model, weightLimit, battery, state } = req.body;

    const validateModel = validator(model);

    if (!validateModel) res.send({
        message: 'There was an error'
    })

    const _newSchema = {
        name: name,
        model: validateModel,
        weightLimit: weightLimit,
        battery: battery,
        state: state
    }

    const _newDrone = new _drones(_newSchema);
    await _newDrone.save();

    res.send(_newDrone);

});

routes.post('/create-medication-drone', (req, res) => {

});

module.exports = routes;