function OrderDTO(id,name,address,tp,code,iname,price,qty,oID,date) {
    var _id = id;
    var _name = name;
    var _address = address;
    var _tp = tp;

    var _code = code;
    var _Iname = iname;
    var _price = price;
    var _qty = qty;

    var _OId = oID;
    var  _date=date;

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
        return _tp;
    }
    this.getItemCode=function () {
        return _code;
    }
    this.getItemName=function () {
        return _Iname;
    }
    this.getItemPrice=function () {
        return _price;
    }
    this.getItemQty=function () {
        return _qty;
    }
    this.getOrderId=function () {
        return _OId;
    }
    this.getOrderDate=function () {
        return _date;
    }

    this.setCustomerID = function (val) {
       _id=val;
    }
    this.setCustomerName = function (val) {
        _name=val;
    }
    this.setCustomerAddress = function (val) {
       _address=val;
    }
    this.setCustomerTP = function (val) {
        _tp=val;
    }
    this.setItemCode=function (val) {
        _code=val;
    }
    this.setItemName=function (val) {
        _Iname=val;
    }
    this.setItemPrice=function (val) {
        _price=val;
    }
    this.setItemQty=function (val) {
        _qty=val;
    }
    this.setOrderId=function (val) {
        _OId=val;
    }
    this.setOrderDate=function (val) {
        _date=val;
    }
}