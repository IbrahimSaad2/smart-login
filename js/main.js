var username = document.getElementById("nameOfSignup");
var mailOfSignup = document.getElementById("mailOfSignup");
var passOfSignup = document.getElementById("passOfSignup");

var mailsList = [];


var mailOfLogin = document.getElementById("mailOfLogin");
var passOfLogin = document.getElementById("passOfLogin");

if(localStorage.getItem("emails") !== null) {
    mailsList = JSON.parse(localStorage.getItem("emails"));
}

function signin() {
    if(validation() == true) {
        var signin = {
            user: username.value,
            mail: mailOfSignup.value,
            pass: passOfSignup.value
        };

        var emailExist = false;

        for(var i = 0;i<mailsList.length;i++){
            if(mailsList[i].mail==mailOfSignup.value){
                emailExist = true;
                break;
            }
        }
        if(emailExist==true) {

            document.getElementById("exist").classList.replace("d-none", "d-flex");
            document.getElementById("succes").classList.replace("d-flex", "d-none");

        } else {
            document.getElementById("exist").classList.replace("d-flex", "d-none");
            document.getElementById("succes").classList.replace("d-none", "d-flex");
            mailsList.push(signin);
            localStorage.setItem("emails", JSON.stringify(mailsList));
            clear();
        }

        console.log(mailsList);
    }
}

function clear() {
    username.value = null;
    mailOfSignup.value = null;
    passOfSignup.value = null;
}

function validation() {
    var email = mailOfSignup.value;
    var regex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if(regex.test(email)==true) {
        document.getElementById("alert").classList.replace("d-flex", "d-none");
        return true;
    } else {
        document.getElementById("alert").classList.replace("d-none", "d-flex");
        document.getElementById("exist").classList.replace("d-flex", "d-none");
        return false;
    }
}

function login() {
    var login = {
        email: mailOfLogin.value,
        password: passOfLogin.value
    };
    console.log(login);

    var check = true;
    for (var i = 0; i < mailsList.length; i++) {
        if (mailOfLogin.value == mailsList[i].mail && passOfLogin.value == mailsList[i].pass) {
            check = false;
            var user = localStorage.setItem("user",mailsList[i].user);
            break;
        }
    }

    if (check == true) {
        for(var i=0;i<mailsList.length;i++){

            if(mailsList[i].mail !== mailOfLogin.value && mailsList[i].pass  !== passOfLogin.value){
                document.getElementById("corect").classList.replace("d-none","d-flex");
                document.getElementById("corectPass").classList.replace("d-flex", "d-none");
                document.getElementById("corectMail").classList.replace("d-flex", "d-none");
                break;
            }

            else if(mailsList[i].mail !== mailOfLogin.value){
                document.getElementById("corectMail").classList.replace("d-none", "d-flex");
                document.getElementById("corectPass").classList.replace("d-flex", "d-none");
                document.getElementById("corect").classList.replace("d-flex","d-none");

                break;
            }

            else{
                document.getElementById("corectPass").classList.replace("d-none", "d-flex");
                document.getElementById("corectMail").classList.replace("d-flex", "d-none");
                document.getElementById("corect").classList.replace("d-flex","d-none");
                break;
            }

        }
    } 
    
    else {
        console.log("success");
        document.getElementById("corectPass").classList.replace("d-flex", "d-none");
        document.getElementById("corectMail").classList.replace("d-flex", "d-none");
        sessionStorage.setItem("valid", JSON.stringify(login));
        window.location = "./home.html";
    }
}

console.log(localStorage.getItem("user"))
document.getElementById("welcome").innerHTML = `<h1>Welcome ${localStorage.getItem("user")}</h1>`


function home(){
    sessionStorage.removeItem("valid");
    window.location = "./index.html"
}

