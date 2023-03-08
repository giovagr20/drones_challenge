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
    const { name, model, weightLimit, battery, state } = req.body;

    const validateModel = validator(model);

    if (!validateModel) res.send({
        message: 'There was an error'
    })

    const _newSchema = {
        name: name,
        model: model,
        weightLimit: weightLimit,
        battery: battery,
        state: state
    }

    const _newDrone = new _drones(_newSchema);
    await _newDrone.save();

    res.send(_newDrone);

});

routes.post('/load-medication-drone', async (req, res) => {
    const { idDrone } = req.body;

    if (!idDrone) res.send({
            message: "Must send id of Drone"
        })

    const droneById = await _drones.findById(idDrone);

    console.log(droneById);

    const {name, weight, code} = req.body;

    const medicationLoad = {   
        name: name,
        weight: weight, 
        code: code, 
        droneBy: droneById 
    }

    console.log(medicationLoad);

    const loadMedication = new _meditation(medicationLoad);

    await loadMedication.save();

    res.send({
        message: 'medication is loaded'
    });

});


routes.get('/load-medications', async (req, res) => {
    const medication = await _meditation.find();

    if (!medication) res.send({ message: 'There is no medication to show' });

    res.send(medication);

});
module.exports = routes;