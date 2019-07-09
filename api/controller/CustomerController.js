function addCustomer(id, name, address, tel) {
    console.log(id);
    console.log(name);
    console.log(address);
    var c1 = new CustomerDTO(id, name, address, tel);
    customerTable.push(c1);
    clearTextField();
}

function deleteCustomer() {

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
            "<td>" + tp + "</td>" +"<td><i class='fas fa-edit btnedit'></i></td>"+"<td><i class='fas fa-trash-alt btndelete'></i></td>" +
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

function clearTextField() {
    $("#customerID").val("");
    $("#customerName").val("");
    $("#customerAddress").val("");
    $("#customerTP").val("");
}

