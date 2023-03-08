import { Model, State } from "../properties/properties"

export const isValidModel = (model) => {
    switch (model) {
        case 'Lightweight': return Model.Lightweight
        case 'Middleweight': return Model.Middleweight
        case 'Cruiserweight': return Model.Cruiserweight
        case 'Heavyweight': return Model.Heavyweight
        default: return Model.ErrorModel
    }
}

export const isValidState = (state) => {
    switch (state) {
        case 'IDLE': return State.IDLE
        case 'DELIVERING': return State.DELIVERING
        case 'LOADING': return State.LOADING
        case 'RETURNING': return State.RETURNING
        case 'DELIVERED': return State.DELIVERED
        case 'LOADED': return State.LOADED
        default: return State.ERROR
    }
}