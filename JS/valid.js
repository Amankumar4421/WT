function fun() {
    var name = document.form1.name.value;
    var napat = /^[a-zA-Z]+$/
    if (name == "") alert("Enter Name");
    else 
    if(name.match(napat))
        fun1();
    else
        alert("Enter valid Name");
}
function fun1() {
    var un = document.form1.username.value;
    var upat = /^[a-zA-Z0-9]+$/;
    if (un == "") alert("Enter Username");
    else if (un.length < 6) alert("Enter Username at least 6 character");
    else if (un.match(upat)) fun2(un);
    else alert("Invalid username");
}
function fun2(un) {
    var pass = /^[a-zA-Z]+[@\.#$%&]?[0-9]+$/;
    var password = document.form1.password.value;
    if (password == "") alert("Enter password");
    else if (password.length < 6 || password.length > 15)
        alert("Password length must between 6-15");
    else if (password.match(pass)) alert("Welcome " + un);
    else if (!password.match(pass)) alert("Enter Password like abc@234");
}
