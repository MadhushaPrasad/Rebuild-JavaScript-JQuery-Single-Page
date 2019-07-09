function addCustomer(id, name, address, tel) {
    var c1 = new CustomerDTO(id, name, address, tel);
    customerTable.push(c1);
    clearTextField();
}

function updateCustomer(id, name, address, tel) {
    for (var i in customerTable) {
        var id = customerTable[i].setCustomerID();
        var id = customerTable[i].setCustomerName();
        var id = customerTable[i].setCustomerAddress();
        var id = customerTable[i].setCustomerTp();
        customerTable.splice(i, 1);
        $("#tbl-Customer").empty();
        getAllCustomer();
    }
}

function deleteCustomer() {
            customerTable.splice(0, 1);
            return true;
}

function getAllCustomer() {
    $("#tbl-Customer").empty();
    for (var i in customerTable) {
        var id = customerTable[i].getCustomerID();
        var name = customerTable[i].getCustomerName();
        var address = customerTable[i].getCustomerAddress();
        var tp = customerTable[i].getCustomerTP();

        // var row = $("#tbl-Customer").insertRow();
        // var edit =row.insertCell(5);
        // var del =row.insertCell(6);
        // var t1 =edit.innerHTML ="<td class =fas fa-edit btnedit></td>";
        // var t2 = del.innerHTML = "<td class =fas fa-trash-alt btnelete></td>";

        var tblRow = "<tr>" +
            "<td>" + id + "</td>" +
            "<td>" + name + "</td>" +
            "<td>" + address + "</td>" +
            "<td>" + tp + "</td>" +"<td><i class='fas fa-edit btnedit'></i></td>"+"<td><i class='fas fa-trash-alt btnedelte' onclick='deleteTableRow()'></i></td>" +
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

$('#btnDeleteAll').click(function () {
   deleteCustomer();
    $("#tbl-Customer").empty();

});

function deleteTableRow() {
    // var table = document.getElementsByClassName("btnedelte");
    // console.dir(table);
    $('table tbody tr').on('click',function () {
        $(this).remove();
    });
}

function clearTextField() {
    $("#customerID").val("");
    $("#customerName").val("");
    $("#customerAddress").val("");
    $("#customerTP").val("");
}



// select a row
// $('table tbody tr').click(function () {
//     var customerID = $($(this).children()[0]).text();
//     var customerName = $($(this).children()[1]).text();
//     var customerAddress = $($(this).children()[2]).text();
//     var customerTP = $($(this).children()[3]).text();
//     $('#customerID').val(customerID);
//     $('#customerName').val(customerName);
//     $('#customerAddress').val(customerAddress);
//     $('#customerTP').val(customerTP);
// });
//
//
// $('table tbody tr .btnedelte').on('dblclick',function () {
//     $(this).remove();
// });
