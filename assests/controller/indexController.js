$('#btnRegister').click(function () {
    $form = $('#customerForm').serialize();
    $.ajax({
        url: "CustomerService.php",
        method: "POST",
        async: true,
        data: form,
        dataTypes: "json"
    }).done(function (response) {
        alert(response);
    })
});