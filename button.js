function disappear(element){
    element.remove();
}

function logInOut(element){
    if(element.innerText == "Login"){
        element.innerText = "Logout"
    }
    else{
        element.innerText="Login"
    }
}

//Code by @Kenniche