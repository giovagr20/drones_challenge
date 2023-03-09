const _medication = require("../persistence/medication_persistence");
const _drones = require("../persistence/drone_persistence");

const getAllDrones = async () => {
  return await _drones.find();
};

const createDrone = async (newDrone) => {
  const _newDrone = new _drones(newDrone);
  return await _newDrone.save();
};

const createMedication = async (idDrone, name, weight, code) => {
  const droneById = await _drones.findById(idDrone);

  const medicationLoad = {
    name: name,
    weight: weight,
    code: code,
    droneBy: droneById,
  };

  const loadMedication = new _medication(medicationLoad);
  return await loadMedication.save();
};

const checkIfDroneIsLoaded = async (id) => {
  const _drone = await _drones.findById(id);

  return _drone.state === 2;
};

const checkAvailabilityDroneForLoading = async () => {
  return (await _drones.find()).map((drone) => {
    if (drone.state === 1) return drone }).filter(elem => {
        if (elem !== null) return elem
    });
};

const checkBatteryLevel = async (id) => {
    return await _drones.findById(id);
}

module.exports = {
  getAllDrones,
  createDrone,
  createMedication,
  checkIfDroneIsLoaded,
  checkAvailabilityDroneForLoading,
  checkBatteryLevel
};
