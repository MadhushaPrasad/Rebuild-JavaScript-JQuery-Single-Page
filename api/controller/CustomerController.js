function addCustomer(id, name, address, tel) {
    console.log(id);
    console.log(name);
    console.log(address);
    var c1 = new CustomerDTO(id, name, address, tel);
    customerTable.push(c1);
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
            "<td>" + tp + "</td>" +
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

