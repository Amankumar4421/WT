function fun() {
    var name = document.getElementById("username").value;
    if (name == "") 
        alert("Enter Name");
    else
        fun1();
}
function fun1()
{
    var pass = /^[a-zA-Z]+[@\.#$%&]?[0-9]+$/;
    var password = document.getElementById("password").value;
    if (password == "") alert("Enter password");
    else if (password.length < 6 || password.length > 15)
        alert("Password length must between 6-15");
    else if (password.match(pass)) 
        fun3();
    else if (!password.match(pass)) 
        alert("Enter Password like abc@234");
}
function fun3()
{
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password1").value;
    if(p1.match(p2))
        alert("Welcome!");
    else
        alert("Enter Same Password");
}