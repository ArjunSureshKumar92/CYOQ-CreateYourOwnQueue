module.exports = class {
    
    constructor() {
        this._id = "123"
        this._name = "default"
    }
    
    set name(name) {
        this._name = name
    }
    
    get name() {
        return this._name
    }
    
    get id() {
        return this._id
    }
}
