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
    clearTextFieldItem();
}

function updateItem(code, name, price, qty) {

    for (var i in itemTabale) {
        var id = itemTabale[i].getItemCode();
        if(id == code) {
            itemTabale.splice(i, 1);
            $('#tbl-Item').empty();
            addItem(code, name, price, qty);
            getAllItem();
        }else {
            alert("Your Item Code is Incorrect..!");
        }
    }
}

function deleteItem() {
    for (var i in itemTabale) {
        itemTabale.splice(i, 1);
        return true;
    }
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
    var icode = $('#inputSearchItem').val();
    var code = $("#itemCode").val();
    var name = $("#itemName").val();
    var price = $("#itemPrice").val();
    var qty = $("#itemQTY").val();
    if (code == ""){
        alert("Please input ItemCede for update Item..");
    }else {
        updateItem(code, name, price, qty);
    }
});

function deletemodal() {
    deleteItem();
    $("#tbl-Item").empty();
}

var rres = true;
$('#btnItemDeleteAll').click(function () {
    if (rres == true) {
        $('#cusDel01').modal('toggle');
        $('#cusDel01').modal('show');

        if ($('#crd01').click(function () {
            deletemodal();
        }));
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

function clearTextFieldItem() {
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