function CustomerDTO(id, name, address, tp) {
    var _id = id;
    var _name = name;
    var _address = address;
    var __tp = tp;

    this.getCustomerID = function () {
        return _id;
    }
    this.getCustomerName = function () {
        return _name;
    }
    this.getCustomerAddress = function () {
        return _address;
    }
    this.getCustomerTP = function () {
        return __tp;
    }
    this.setCustomerID = function (val) {
        _id = val;
    }
    this.setCustomerName = function (val) {
        _name = val;
    }
    this.setCustomerAddress = function (val) {
        _address = val;
    }
    this.setCustomerTp = function (val) {
        __tp = val;
    }
}