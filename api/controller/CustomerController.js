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

$('#customerID,#customerName,#customerAddress,#customerTP').on('keypress', function (e) {
    if (e.keyCode == 13) {
        if ($('#customerID').val() == "") {
            $('#customerID').focus();
        }
        else if ($('#customerName').val() == "") {
            $('#customerName').focus();
        } else if ($('#customerAddress').val() == "") {
            $('#customerAddress').focus();
        } else if ($('#customerTP').val() == "") {
            $('#customerTP').focus();
        } else {
            $(this).next().focus();
        }
        // alert("Hi its work Bro!!");
    }
});


function clearTextFieldCustomer() {
    $("#customerID").val("");
    $("#customerName").val("");
    $("#customerAddress").val("");
    $("#customerTP").val("");
}

function addCustomer(id, name, address, tel) {
    var c1 = new CustomerDTO(id, name, address, tel);
    customerTable.push(c1);
   clearTextFieldCustomer();

}

function updateCustomer(id, name, address, tel) {
    for (var i in customerTable) {
        var idd = customerTable[i].getCustomerID();
        if (id == idd) {
            customerTable.splice(i, 1);
            $('#tbl-Customer').empty();
            addCustomer(id, name, address, tel);
            getAllCustomer();
        } else {
            alert("Your Customer Id is Incorrect..!");
        }
    }
}

function searchCustomer(id) {
    for (var i in customerTable) {
        if (customerTable[i].getCustomerID() == id) {
            var id = customerTable[i].getCustomerID();
            var name = customerTable[i].getCustomerName();
            var address = customerTable[i].getCustomerAddress();
            var tp = customerTable[i].getCustomerTP();

            $("#customerID").val(id);
            $("#customerName").val(name);
            $("#customerAddress").val(address);
            $("#customerTP").val(tp);
        } else {
            alert("There is No Any Customer Like That..!");
        }
    }
}


function deleteCustomer() {
    for (var i in customerTable) {
        customerTable.splice(i, 1);
        return true;
    }
}

function getAllCustomer() {
    $("#tbl-Customer").empty();
    for (var i in customerTable) {
        var id = customerTable[i].getCustomerID();
        var name = customerTable[i].getCustomerName();
        var address = customerTable[i].getCustomerAddress();
        var tp = customerTable[i].getCustomerTP();
        var tblRow = "<tr>" +
            "<td>" + id + "</td>" +
            "<td>" + name + "</td>" +
            "<td>" + address + "</td>" +
            "<td>" + tp + "</td>" + "<td><i class='fas fa-edit btnedit' onclick='editCustomer()'></i></td>" + "<td><i class='fas fa-trash-alt btnedelte' onclick='deleteCustomerTableRow()'></i></td>" +
            +"</tr>";
        $("#tbl-Customer").append(tblRow);
    }
}

$("#btnRegister").click(function () {
    var id = $("#customerID").val();
    var name = $("#customerName").val();
    var address = $("#customerAddress").val();
    var tp = $("#customerTP").val();
    addCustomer(id, name, address, tp);
    getAllCustomer();
});


$('#btnUpdate').click(function () {
    var cId = $('#inputSearchCustomer').val();
    var id = $("#customerID").val();
    var name = $("#customerName").val();
    var address = $("#customerAddress").val();
    var tp = $("#customerTP").val();
    if (id == "") {
        alert("Please input Customer ID for update Item..");
    } else {
        updateCustomer(id, name, address, tp);
    }
});

$('#searchCustomer').click(function () {
    var cId = $('#inputSearchCustomer').val();
    if (cId == "") {
        alert("Please Input Customer Id For Search..");
    } else {
        searchCustomer(cId);
    }
});

function deleteCustomermodal() {
    deleteCustomer();
    $('#tbl-Customer').empty();

}

var rres = true;
$('#btnDeleteAll').click(function () {
    if (rres == true) {
        $('#cusDel').modal('toggle');
        $('#cusDel').modal('show');

        if ($('#crd00').click(function () {
            deleteCustomermodal()
        })) ;
    } else {
        $('#btnDeleteAll').focus();
        alert('Welcome Again..!');
    }
});

function deleteCustomerTableRow() {
    // var table = document.getElementsByClassName("btnedelte");
    // console.dir(table);
    $('table tbody tr').on('click', function () {
        $(this).remove();
    });
}
function editCustomer() {
    $('table tbody tr').click(function () {
        var customerID = $($(this).children()[0]).text();
        var customerName = $($(this).children()[1]).text();
        var customerAddress = $($(this).children()[2]).text();
        var customerTP = $($(this).children()[3]).text();
        $('#customerID').val(customerID);
        $('#customerName').val(customerName);
        $('#customerAddress').val(customerAddress);
        $('#customerTP').val(customerTP);
    });
}