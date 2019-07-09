function ItemDTO(code,name,price,qty) {
    var _code = code;
    var _name = name;
    var _price = price;
    var _qty = qty;

    this.getItemCode=function () {
        return _code;
    }
    this.getItemName=function () {
        return _name;
    }
    this.getItemPrice=function () {
        return _price;
    }
    this.getItemQty=function () {
        return _qty;
    }

    this.setItemCode=function (val) {
       _code=val;
    }
    this.setItemName=function (val) {
       _name=val;
    }
    this.setItemPrice=function (val) {
       _price=val;
    }
    this.setItemQty=function (val) {
        _qty=val;
    }
}