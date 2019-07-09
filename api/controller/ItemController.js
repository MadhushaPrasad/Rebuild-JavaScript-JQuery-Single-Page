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
});
$('#itemCode,#itemName,#itemPrice,#itemQTY').on('keypress', function (e) {
    if (e.keyCode == 13) {
        if ($('#itemCode').val() == "") {
            $('#itemCode').focus();
        }
        else if ($('#itemName').val() == "") {
            $('#itemName').focus();
        } else if ($('#itemPrice').val() == "") {
            $('#itemPrice').focus();
        } else if ($('#itemQTY').val() == "") {
            $('#itemQTY').focus();
        } else {
            $(this).next().focus();
        }
        // alert("Hi its work Bro!!");
    }
});

function addItem(code, name, price, qty) {
    var c1 = new ItemDTO(code, name, price, qty);
    itemTabale.push(c1);
    clearTextField();
}

// function updateItem(id, name, address, tel) {
//     for (var i in customerTable) {
//         var id = customerTable[i].setCustomerID();
//         var name = customerTable[i].setCustomerName();
//         var address = customerTable[i].setCustomerAddress();
//         var tel = customerTable[i].setCustomerTp();
//         customerTable.splice(i, 1);
//         $("#tbl-Customer").empty();
//         addCustomer(id,name,address,tp);
//         getAllCustomer();
//     }
// }

function deleteCustomer() {
    itemTabale.splice(0, 1);
    return true;
}

function getAllItem() {
    $("#tbl-Item").empty();
    for (var i in itemTabale) {
        var code = itemTabale[i].getItemCode();
        var name = itemTabale[i].getItemName();
        var price = itemTabale[i].getItemPrice();
        var qty = itemTabale[i].getItemQty();
        var tblRow = "<tr>" +
            "<td>" + code + "</td>" +
            "<td>" + name + "</td>" +
            "<td>" + price + "</td>" +
            "<td>" + qty + "</td>" + "<td><i class='fas fa-edit btnedit' onclick='editItem()'></i></td>" + "<td><i class='fas fa-trash-alt btnedelte' onclick='deleteTableRow()'></i></td>" +
            +"</tr>";
        $("#tbl-Item").append(tblRow);
    }
}

$("#btnItemregis").click(function () {
    var code = $("#itemCode").val();
    var name = $("#itemName").val();
    var price = $("#itemPrice").val();
    var qty = $("#itemQTY").val();
    addItem(code, name, price, qty);
    getAllItem();
});

$('#btnItemUpdate').click(function () {
    var code = $("#itemCode").val();
    var name = $("#itemName").val();
    var price = $("#itemPrice").val();
    var qty = $("#itemQTY").val();
    updateItem(code, name, price, qty);
});

function deletemodal() {
    deleteCustomer();
    $("#tbl-Item").empty();
}

var rres = true;
$('#btnItemDeleteAll').click(function () {
    if (rres == true) {
        $('#cusDel01').modal('toggle');
        $('#cusDel01').modal('show');

        if ($('#crd01').click(function () {
            deletemodal();
        })) ;
    } else {
        $('#btnItemDeleteAll').focus();
        alert('Welcome Again..!');
    }
});

function deleteTableRow() {
    // var table = document.getElementsByClassName("btnedelte");
    // console.dir(table);
    $('table tbody tr').on('click', function () {
        $(this).remove();
    });
}

function clearTextField() {
    $("#itemCode").val("");
    $("#itemName").val("");
    $("#itemPrice").val("");
    $("#itemQTY").val("");
}

function editItem() {
    $('table tbody tr').click(function () {
        var itemCode = $($(this).children()[0]).text();
        var itemName = $($(this).children()[1]).text();
        var itemPrice = $($(this).children()[2]).text();
        var itemQTY = $($(this).children()[3]).text();
        $('#itemCode').val(itemCode);
        $('#itemName').val(itemName);
        $('#itemPrice').val(itemPrice);
        $('#itemQTY').val(itemQTY);
    });
}