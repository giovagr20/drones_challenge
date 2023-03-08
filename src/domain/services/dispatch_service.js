const _medication = require('../persistence/medication_persistence');
const _drones = require('../persistence/drone_persistence');

const getAllDrones = async () => {
   return await _drones.find();
}

const createDrone = async(newDrone) => {
    console.log('Enter here --- Services');
    const _newDrone = new _drones(newDrone);
    return await _newDrone.save();
}

const createMedication = async (idDrone, name, weight, code) => {
    const droneById = await _drones.findById(idDrone);

    const medicationLoad = {   
        name: name,
        weight: weight, 
        code: code, 
        droneBy: droneById 
    }

    const loadMedication = new _medication(medicationLoad);
    return await loadMedication.save();
}

module.exports = {
    getAllDrones,
    createDrone,
    createMedication
}