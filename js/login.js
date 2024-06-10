// var mail = document.getElementById("mail-login");
// var pass = document.getElementById("pass-login");

// var storage = localStorage

// function login(){
//     // if(validation() == true){
//         var login = {
//             mail : mail.value,
//             password : pass.value
//         };
//         console.log(login);
//         console.log(storage);

//         var check = true;
//         var users = JSON.parse(localStorage.getItem("users"))
//         for(var i=0;i<storage.length;i++){
//             if(mail.value == localStorage[i].mail && pass.value == localStorage[i].pass){
//                 check=false;
//                 break;
//             }
//         }
//         if(check==true){
//             document.getElementById("corect").classList.replace("d-none","d-flex")
//         }
//         else{
//             console.log("succes");
//         }
//     // }
// }



// function clear() {
//     username.value = null;
//     mail.value = null;
//     pass.value = null;
// }

// // function validation() {
// //     var email = mail.value;
// //     var regex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
// //     if(regex.test(email)==true) {
// //         document.getElementById("alert").classList.replace("d-flex", "d-none");
// //         return true;
// //     } else {
// //         document.getElementById("alert").classList.replace("d-none", "d-flex");
// //         return false;
// //     }
// // }






var mail = document.getElementById("mail-login");
var pass = document.getElementById("pass-login");

function login() {
    // if (validation() == true) {  // Uncomment if validation function is defined and needed
        var login = {
            email: mail.value,
            password: pass.value
        };
        console.log(login);

        var users = JSON.parse(localStorage.getItem("users")) || [];
        var check = true;

        for (var i = 0; i < users.length; i++) {
            if (users[i].email === login.email && users[i].password === login.password) {
                check = false;
                break;
            }
        }

        if (check === true) {
            document.getElementById("corect").classList.replace("d-none", "d-flex");
        } else {
            console.log("success");
        }
    // }
}

function clear() {
    mail.value = null;
    pass.value = null;
}

// function validation() {
//     var email = mail.value;
//     var regex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
//     if (regex.test(email) == true) {
//         document.getElementById("alert").classList.replace("d-flex", "d-none");
//         return true;
//     } else {
//         document.getElementById("alert").classList.replace("d-none", "d-flex");
//         return false;
//     }
// }
