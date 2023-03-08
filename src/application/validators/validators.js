const { Model } = require('../properties/properties_model');

const isValidModel = (model) => {
    switch (model) {
        case 'Lightweight': return Model.Lightweight
        case 'Middleweight': return Model.Middleweight
        case 'Cruiserweight': return Model.Cruiserweight
        case 'Heavyweight': return Model.Heavyweight
        default: return Model.ErrorModel
    }
}

module.exports = isValidModel;