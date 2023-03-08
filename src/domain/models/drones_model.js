const Model = {
    Lightweight: 0,
    Middleweight: 1,
    Cruiserweight: 2,
    Heavyweight: 3,
    ErrorModel: 4
}

const Status = {
    IDLE: 0, 
    LOADING: 1, 
    LOADED: 2, 
    DELIVERING: 3, 
    DELIVERED: 4, 
    RETURNING: 5, 
    ERROR: 6
}


module.exports = {
    Model,
    Status
}