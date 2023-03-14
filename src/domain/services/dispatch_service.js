const _medication = require("../persistence/medication_persistence");
const _drones = require("../persistence/drone_persistence");

const getAllDrones = async () => {
  const drones = Promise.resolve(_drones.find())

  return await drones;
};

const createDrone = async (newDrone) => {
  const _newDrone = new _drones(newDrone);
  return await _newDrone.save();
};

const createMedication = async (idDrone, name, weight, code) => {
  const droneById = Promise.resolve(_drones.findById(idDrone));

  const promiseDrone = await droneById;

  const medicationLoad = {
    name: name,
    weight: weight,
    code: code,
    droneBy: promiseDrone,
  };

  const loadMedication = new _medication(medicationLoad);
  return await loadMedication.save();
};

const checkIfDroneIsLoaded = async (id) => {
  const _drone = Promise.resolve(_drones.findById(id));

  return await _drone.state === 2;
};

const checkAvailabilityDroneForLoading = async () => {
  const _dronesData = Promise.resolve(_drones.find());
  return (await _dronesData).map((drone) => {
    if (drone.state === 1) return drone }).filter(elem => {
        if (elem !== null) return elem
    });
};

const checkBatteryLevel = async (id) => {
    const battery = Promise.resolve(_drones.findById(id));

    return await battery;
}

module.exports = {
  getAllDrones,
  createDrone,
  createMedication,
  checkIfDroneIsLoaded,
  checkAvailabilityDroneForLoading,
  checkBatteryLevel
};
