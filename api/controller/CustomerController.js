function addTableElement(id,name,address,tel) {
    var il = document.createElement("i");
    il.classList.add("fas fa-edit btnedit");
    var il2 = document.createElement("i");
    il2.classList.add("fas fa-edit btnedit");
    var tblRow = "<tr>"+"<td>"+id+"</td>"+"<td>"+name+"</td>"+"<td>"+address+"</td>"+"<td>"+tel+"</td>"+"<td>"+i1+"</td>"+"<td>"+il2+"</td>"+"</tr>";
    $('#tbl-Customer').append(tblRow);

// <td><i class="fas fa-edit btnedit"></i></td>
//     <td><i class="fas fa-trash-alt btnedelte"></i></td>
}
$('#btnRegister').click(function () {
    var id = $('#customerID').val();
    var name = $('#customerName').val();
    var address = $('#customerAddress').val();
    var tp = $('#customerTP').val();
    addTableElement(id,name,address,tp);
});

// $('#btnDeleteAll').click(function () {
//     $('#tbl-Customer').clear();
// });