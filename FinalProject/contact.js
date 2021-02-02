function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var topic = document.getElementById("topic").value;
    var orderNumber = document.getElementById("orderNumber").value;
    var email = document.getElementById("email").value;
    var description = document.getElementById("description").value;
    var captcha = document.getElementById("captcha").value;
    var output = document.getElementById("output");

    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var orderNumberError = document.getElementById("orderNumberError");
    var emailError = document.getElementById("emailError");
    var descriptionError = document.getElementById("descriptionError");
    var captchaError = document.getElementById("captchaError");

    var len = orderNumber.toString().length;
    var con = email.includes("@");

    var pass = false;

    //check if the first name field is empty
    if (!firstName) {
        firstNameError.innerHTML = "Please enter your first name";
        pass = true;
    }
    else { //clears error
        firstNameError.innerHTML = "";
    }

    //checks if the last name field is empty
    if (!lastName) {
        lastNameError.innerHTML = "Please enter your last name.";
        pass = true;
    }
    else {
        lastNameError.innerHTML = "";
    }

    // var boo = topic == 2;
    // if (boo) {
    //     output.innerHTML = 9;
    // }
    //
    //
    // //require order number if an topic regarding the order is selected
    // if (boo) {
    //     orderNumberError.innerHTML = "Please enter an order number.";
    //     pass = true;
    // }
    // else {
    //     orderNumberError.innerHTML = "";
    // }


    if (isNaN(orderNumber) || (len > 0 && len != 6)) {
        orderNumberError.innerHTML = "Please enter a valid 6 digit number.";
        pass = true;
    }
    else {
        orderNumberError.innerHTML = "";
    }

    //checks if the email is valid by containing the "@"
    if (!con) {
        emailError.innerHTML = "Please enter a valid email.";
        pass = true;
    }
    else {
        emailError.innerHTML = "";
    }

    //checks if description is empty
    if (description == "") {
        descriptionError.innerHTML = "Please add an description.";
        pass = true;
    }
    else {
        descriptionError.innerHTML = "";
    }

    //check is entered captcha is valid
    if (!captcha || captcha != 7) {
        captchaError.innerHTML = "Invalid captcha. Try again.";
        pass = true;
    }
    else {
        captchaError.innerHTML = "";
    }

    //determines if the form is properly filled out
    if (pass) {
        return;
    }

    output.innerHTML = "   Thank you for your submission. We will respond as soon as possible.";

}
