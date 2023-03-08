const express = require('express');
const routes = express.Router();
const serviceDispatch = require('../../../domain/services/dispatch_service');
const validator = require('../../validators/validators');

routes.get('/drones', async (req, res) => {
    const drones = await serviceDispatch.getAllDrones()

    if (!drones) res.send({ message: 'There is no drones to show' });

    res.send(drones);
});

routes.post('/create-drone', async (req, res) => {    
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

    const droneNew = await serviceDispatch.createDrone(_newSchema)

    console.log(droneNew);

    res.send(droneNew);

});

routes.post('/load-medication-drone', async (req, res) => {
    const { idDrone, name, weight, code } = req.body;

    if (!idDrone) res.send({message: "Must send id of Drone"})

    const medication = await serviceDispatch.createMedication(idDrone, name, weight, code);

    res.send({medication});

});

module.exports = routes;