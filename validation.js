function val(){
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var pass= document.getElementById("pass").value;
    var cpass= document.getElementById("cpass").value;
    var error= document.getElementById("error_message");
    var text;
    error.style.padding = "10px";

    if(name.length < 2){
        text = "Name Should be more than 6 characters";
        error.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Enter Valid Email Address";
        error_message.innerHTML = text;
        return false;
    }
    if(pass.length < 8){
        text = "Password must be  more than 8 characters";
        error.innerHTML = text;
        return false;
    }
    if(pass != cpass){
        text = "Password does not match";
        error.innerHTML = text;
        return false;
    }
    window.location.replace("welcome.html")
    error.style.padding = "10px";
    return false;
}
