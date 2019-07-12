function getCustomerDetails() {
    alert("sdgjhgs");
    var id = $('form select option .opID').val();
    for (var i in customerTable) {
        if (customerTable[i].getCustomerID() == id) {
            var name = customerTable[i].getCustomerName();
            var address = customerTable[i].getCustomerAddress();
            var tp = customerTable[i].getCustomerTP();
            alert(name);
            alert(address);
            alert(tp);

            $('#OcustomerName').val(name);
            $('#OcustomerAddress').val(address);
            $('#OcustomerTP').val(tp);
        }
    }
}

function getItemDetails() {
    alert("dsfdsf");
    var id = $('.opiID').val();
    for (var i in itemTabale) {
        if (itemTabale[i].getItemCode() == id) {
            var name = itemTabale[i].getItemName();
            var price = itemTabale[i].getItemPrice();
            var qty = itemTabale[i].getItemQty();
            alert(name);
            alert(price);
            alert(qty);

            $('#OitemName').val(name);
            $('#OitemPrice').val(price);
            $('#OitemQTY').val(qty);
        }
    }
}

function customerID() {
    for (var i in customerTable) {
        var id = customerTable[i].getCustomerID();
        var option = "<option onclick='getCustomerDetails()' class='opID'>" + id + "</option>";
        $('#selectorOP01').append(option);
    }
}

function itemID() {
    for (var i in itemTabale) {
        var code = itemTabale[i].getItemCode();
        var option = "<option onclick='getItemDetails()' class='opiID'>" + code + "</option>";
        $('#selectorOP001').append(option);
    }
}

$(function () {


    $('#tblDiv01 ,#tblDiv02 ,#tblDiv').fadeOut(1);
    // < !--CustomerForm-->
    $('#section01').css('display', 'none');
    $('#section02').css('display', 'none');
    $('#section03').css('display', 'none');


    $('#customer').click(function () {
        $('#section0 , #section00, #section02, #section03').css('display', 'none');
        $('#section01').css('display', 'block');
    });
    $('#item').click(function () {
        $('#section0 , #section00 ,#section01, #section03').css('display', 'none');
        $('#section02').css('display', 'block');
    });
    $('#orders').click(function () {
        $('#section0 , #section00 , #section01 , #section02').css('display', 'none');
        $('#section03').css('display', 'block');
        customerID();
        itemID();
    });


    $('#OcustomerName,#OcustomerAddress,#OcustomerTP,#OitemName,#OitemPrice,#OitemQTY,#OId,#ODate').on('keypress', function (e) {
        if (e.keyCode == 13) {
            $(this).next().focus();
            // alert("Hi its work Bro!!");
            if ($('#OcustomerName').val() == "") {
                $('#OcustomerName').focus();
            } else if ($('#OcustomerAddress').val() == "") {
                $('#OcustomerAddress').focus();
            } else if ($('#OcustomerTP').val() == "") {
                $('#OcustomerTP').focus();
            } else if ($('#OitemName').val() == "") {
                $('#OitemName').focus();
            } else if ($('#OitemPrice').val() == "") {
                $('#OitemPrice').focus();
            } else if ($('#OitemQTY').val() == "") {
                $('#OitemQTY').focus();
            } else if ($('#OId').val() == "") {
                $('#OId').focus();
            } else if ($('#ODate').val() == "") {
                $('#ODate').focus();
            } else {
                $(this).next().focus();
            }
        }
    });

    if ($("#btnNewCustomer").click(function () {
        $('#section0 , #section00, #section02, #section03').css('display', 'none');
        $('#section01').css('display', 'block');
    })) ;
    if ($("#btnNewItem").click(function () {
        $('#section0 , #section00 ,#section01, #section03').css('display', 'none');
        $('#section02').css('display', 'block');
    })) ;
});
// var a = true;
// $('#selectorOP01').click(function () {
//     if (a) {
//         customerID();
//         itemID();
//         a = false;
//     } else {
//         a = true;
//     }
// });

function clearTextFieldOrder() {
    $('#OcustomerName').val("");
    $('#OcustomerAddress').val("");
    $('#OcustomerTP').val("");
    $('#OitemName').val("");
    $('#OitemPrice').val("");
    $('#OitemQTY').val("");
    $('#OId').val("");
    $('#ODate').val("");
}

$('#btnClearOrder').click(function () {
    clearTextFieldOrder();
});

function addOrder(id, name, address, tp, code, iName, iPrice, iQty, oID, oDate) {
    var o1 = new OrderDTO(id, name, address, tp, code, iName, iPrice, iQty, oID, oDate);
    orderTable.push(o1);
    clearTextFieldOrder();
}

function deleteOrder() {
    for (var i in orderTable) {
        orderTable.splice(i, 1);
        return true;
    }
}

function deleteOrderModal() {
    deleteOrder();
    $("#tbl-Order").empty();
}

var rres = true;
$('#btnDeleteAllOrder').click(function () {
    if (rres == true) {
        $('#cusDel02').modal('toggle');
        $('#cusDel02').modal('show');

        if ($('#crd02').click(function () {
            deleteOrderModal();
        })) ;
    } else {
        $('#btnDeleteAllOrder').focus();
        alert('Welcome Again..!');
    }
});

function editOrder() {
    $('table tbody tr').click(function () {
        for (var i in orderTable) {
            // var id = $($(this).children()[1]).text();
            var Name = orderTable[i].getCustomerName();
            var address = orderTable[i].getCustomerAddress();
            var tp = orderTable[i].getCustomerTP();
            // var icode = $($(this).children()[2]).text();
            var iname = orderTable[i].getItemName();
            var price = $($(this).children()[5]).text();
            var qty = $($(this).children()[6]).text();
            var oID = $($(this).children()[0]).text();
            var date = $($(this).children()[3]).text();
            $('#OcustomerName').val(Name);
            $('#OcustomerAddress').val(address);
            $('#OcustomerTP').val(tp);
            $('#OitemName').val(iname);
            $('#OitemPrice').val(price);
            $('#OitemQTY').val(qty);
            $('#OId').val(oID);
            $('#ODate').val(date);
        }
    });
}

function deleteOrderTableRow() {
    // var table = document.getElementsByClassName("btnedelte");
    // console.dir(table);
    $('table tbody tr').on('click', function () {
        $(this).remove();
    });
}

function getAllOrder() {
    for (var i in orderTable) {
        var id = orderTable[i].getCustomerID();
        var name = orderTable[i].getCustomerName();
        var address = orderTable[i].getCustomerAddress();
        var tp = orderTable[i].getCustomerTP();
        var code = orderTable[i].getItemCode();
        var iname = orderTable[i].getItemName();
        var price = orderTable[i].getItemPrice();
        var qty = orderTable[i].getItemQty();
        var oid = orderTable[i].getOrderId();
        var date = orderTable[i].getOrderDate();
        var tblRow = "<tr>" +
            "<td>" + oid + "</td>" +
            "<td>" + id + "</td>" +
            "<td>" + code + "</td>" +
            "<td>" + date + "</td>" +
            "<td>" + iname + "</td>" +
            "<td>" + price + "</td>" +
            "<td>" + qty + "</td>" +
            "<td>" + price * qty + "</td>" +
            "<td><i class='fas fa-edit btnedit' onclick='editOrder()'></i></td>" + "<td><i class='fas fa-trash-alt btnedelte' onclick='deleteOrderTableRow()' ></i></td>" +
            +"</tr>";
        $("#tbl-Order").append(tblRow);
    }
}


$('#btnPlaceOrder').click(function () {
    var id = $('#selectorOP01').val();
    alert(id);
    var name = $('#OcustomerName').val();
    var address = $('#OcustomerAddress').val();
    var tp = $('#OcustomerTP').val();
    var code = $('#selectorOP001').val();
    var iName = $('#OitemName').val();
    var iPrice = $('#OitemPrice').val();
    var iQty = $('#OitemQTY').val();
    var oID = $('#OId').val();
    var oDate = $('#ODate').val();
    addOrder(id, name, address, tp, code, iName, iPrice, iQty, oID, oDate);
    getAllOrder();
});
