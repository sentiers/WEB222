// WEB222 assignment5 Hyunji Cho 128065182

function formValidation() 
{
    clearErrors();

    if (validateUsername() && validatePassword() && validateRePassword() && validatefName() && validatelName() && validatePhone() && validateStreet() && validatePostal() && validateCity()) 
    {
        alert("Welcome!");
        return true;
    } 
    else
    {
        return false;
    }
}

function clearErrors() 
{
    document.querySelector("#userError").innerHTML = "";

    document.querySelector("#passError").innerHTML = "";

    document.querySelector("#rePassError").innerHTML = "";

    document.querySelector("#fNameError").innerHTML = "";
 
    document.querySelector("#lNameError").innerHTML = "";

    document.querySelector("#phoneError").innerHTML = "";
    
    document.querySelector("#streetError").innerHTML = "";

    document.querySelector("#pCodeError").innerHTML = "";

    document.querySelector("#cityError").innerHTML = "";
}

function validateUsername() 
{
    var error = document.querySelector("#userError");
    var Uname = document.getElementById("username");
    var input = Uname.value;

    if(!/[a-zA-Z]/.test(input[0]))
    {
        clearErrors();
        error.innerHTML += "<p>*Username must start with a letter!</p>";
        Uname.style.background = "rgb(255, 238, 183)";
        return false;
    }
    else if(input.length < 6)
    {
        clearErrors();
        error.innerHTML += "<p>*Username must be at least 6 characters long!</p>";
        Uname.style.background = "rgb(255, 238, 183)";
        return false;
    }
    else
    {    
        clearErrors();
        Uname.style.background = "white";   
        return true;
    }
}

function validatePassword() 
{
    var error = document.querySelector("#passError");
    var Pword = document.getElementById("password");
    var input = Pword.value;

    if(/\s/.test(input[0]))
    {
        clearErrors();
        error.innerHTML += "<p>*Password must start with a character!</p>";
        Pword.style.background = "rgb(255, 238, 183)";
        return false;
    }
    else if(input.length < 8)
    {
        clearErrors();
        error.innerHTML += "<p>*Password must be at least 8 characters long!</p>";
        Pword.style.background = "rgb(255, 238, 183)";
        return false;
    }
    else if(!/[0-9]/.test(input))
    {
        clearErrors();
        error.innerHTML += "<p>*Password must contain at least one digit!</p>";
        Pword.style.background = "rgb(255, 238, 183)";
        return false;
    }
    else if(!/[A-Z]/.test(input))
    {
        clearErrors();
        error.innerHTML += "<p>*Password must contain at least one Uppercase!</p>";
        Pword.style.background = "rgb(255, 238, 183)";
        return false;
    }
    else
    {
        clearErrors();
        Pword.style.background = "white";   
        return true;
    }
}

function validateRePassword() 
{
    var error = document.querySelector("#rePassError");
    var Pword = document.getElementById("password");
    var Pword2 = document.getElementById("rePassword");
    var input = Pword2.value;

    if (input != Pword.value) 
    {
        clearErrors();
        error.innerHTML += "<p>*Password must match!</p>";
        Pword2.style.background = "rgb(255, 238, 183)";
        return false;
    }
    else
    {
        clearErrors();
        Pword2.style.background = "white";   
        return true;
    }
}

function validatefName() 
{
    var error = document.querySelector("#fNameError");
    var Fname = document.getElementById("fName");
    var input = Fname.value;

    if(!/^[a-zA-Z]+$/.test(input))
    {
        clearErrors();
        error.innerHTML += "<p>*Name can only contain letters!</p>";
        Fname.style.background = "rgb(255, 238, 183)";
        return false;
    }
    else
    {
        clearErrors();
        Fname.style.background = "white";   
        return true;
    }
}

function validatelName() 
{
    var error = document.querySelector("#lNameError");
    var Lname = document.getElementById("lName");
    var input = Lname.value;

    if(!/^[a-zA-Z]+$/.test(input))
    {
        clearErrors();
        error.innerHTML += "<p>*Name can only contain letters!</p>";
        Lname.style.background = "rgb(255, 238, 183)";
        return false;
    }
    else
    {
        clearErrors();
        Lname.style.background = "white";   
        return true;
    }
}

function validatePhone() 
{
    var error = document.querySelector("#phoneError");
    var Phone = document.getElementById("phone");
    var input = Phone.value;

    if(!/^\d{3}-\d{3}-\d{4}$/.test(input))
    {
        clearErrors();
        error.innerHTML += "<p>*Phone number must be in the format! (eg. 123-456-7890)</p>";
        Phone.style.background = "rgb(255, 238, 183)";
        return false;
    }
    else
    {
        clearErrors();
        Phone.style.background = "white";   
        return true;
    }
}

function validateStreet() 
{
    var error = document.querySelector("#streetError");
    var Street = document.getElementById("street");
    var input = Street.value;

    if(/[0-9]/.test(input))
    {
        clearErrors();
        error.innerHTML += "<p>*Street name cannot contain digits!</p>";
        Street.style.background = "rgb(255, 238, 183)";
        return false;
    }
    else
    {
        clearErrors();
        Street.style.background = "white";   
        return true;
    }
}

function validatePostal() 
{
    var error = document.querySelector("#pCodeError");
    var Postal = document.getElementById("pCode");
    var input = Postal.value;

    if(!/^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$/.test(input))
    {
        clearErrors();
        error.innerHTML += "<p>*Postal code must be in Canadian format! (eg. A1A1A1)</p>";
        Postal.style.background = "rgb(255, 238, 183)";
        return false;
    }
    else
    {
        clearErrors();
        Postal.style.background = "white";   
        return true;
    }
}

function validateCity() 
{
    var error = document.querySelector("#cityError");
    var City = document.getElementById("city");
    var input = City.value;

    if(!/^[a-zA-Z]+$/.test(input))
    {
        clearErrors();
        error.innerHTML += "<p>*City name can only contain letters</p>";
        City.style.background = "rgb(255, 238, 183)";
        return false;
    }
    else
    {
        clearErrors();
        City.style.background = "white";   
        return true;
    }
}