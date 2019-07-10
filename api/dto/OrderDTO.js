function OrderDTO(oID,date) {
    var _OId = oID;
    var  _date=date;

    this.getOrderId = function () {
        return _OId;
    }
    this.getOrderDate = function () {
        return _date;
    }

    this.setOrderId = function (val) {
        _OId = val;
    }
    this.setOrderdate = function (val) {
        _date = val;
    }
}