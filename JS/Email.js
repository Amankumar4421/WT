function fun()
{
    let str = document.getElementById("email").value;
    let pat = /^\w+([\.-]?\w+)*@\w+\.\w{2,3}$/;
    if(str=="")
        alert("Enter Email");
    else
    if(str.match(pat))
        alert("Welcome");
    else
        alert("Invalid Email");
}