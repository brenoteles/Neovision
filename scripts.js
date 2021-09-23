$(document).ready(function() {
    $("#neovision-form").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register",
            method: "POST",
            dataType: "json",
            crossDomain: true,
            contentType: "application/json",
            data: JSON.stringify({
                name: $('#nome').val(),
                email: $('#email').val()
            }),
            cache: false,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", $('#email').val());
            },
            success: function (data) {
                alert("Enviado");
            },
            error: function (jqXHR, textStatus, errorThrown) {
        
            }
        });    
    }); 
})

