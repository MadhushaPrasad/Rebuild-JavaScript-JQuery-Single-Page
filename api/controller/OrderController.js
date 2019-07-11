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
        });


        $('#cusTxt, #AgeTxt, #txtTP, #SalaryTxt, #SaveCustomer').on('keypress', function (e) {
            if (e.keyCode == 13) {
                $(this).next().focus();
                // alert("Hi its work Bro!!");
            }
        });
});

function customerID() {
    for (var i in customerTable) {
        var id = customerTable[i].getCustomerID();
        alert(id);
    }
}

