function validateEmailAddress(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }
    
    function validate() {
    $("#mail").text("");
    var emailaddress = $("#email").val();
    if (validateEmailAddress(emailaddress)) {
    $("#mail").text(emailaddress + " es valido :)");
    $("#mail").css("color", "green");
    } else {
    $("#mail").text(emailaddress + " no es correcto, por favor vuelva a ingresarlo:(");
    $("#mail").css("color", "red");
    }
    return false;
    }
    $("#validate").bind("click", validate);