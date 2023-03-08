const { Model, Status } = require("../../domain/models/drones_model");

const validModel = (model) => {
    switch (model) {
        case 'Lightweight': return Model.Lightweight;
        case 'Middleweight': return Model.Middleweight;
        case 'Cruiserweight': return Model.Cruiserweight;
        case 'Heavyweight': return Model.Heavyweight;
        default: return Model.ErrorModel;
    }
}

const validStatus = (state) => {
    switch (state) {
        case 'IDLE': return Status.IDLE;
        case 'LOADING': return Status.LOADING;
        case 'LOADED': return Status.LOADED;
        case 'DELIVERING': return Status.DELIVERING;
        case 'DELIVERED': return Status.DELIVERED;
        case 'RETURNING': return Status.RETURNING
        default: return Status.ERROR;
    }
}

module.exports = {
    validModel,
    validStatus
}