function fun1()
{
    var dec = document.getElementById("dec").value;
    if(dec!="")
    {
        document.getElementById("bin").value = dec_bin(dec);
        document.getElementById("oct").value = dec_oct(dec);
        document.getElementById("hex").value = dec_hex(dec);
    }
    else
        fun2();
}
function fun2()
{
    var bin = document.getElementById("bin").value;
    if(bin!="")
    {
        document.getElementById("dec").value = bin_dec(bin);
        document.getElementById("oct").value = bin_oct(bin);
        document.getElementById("hex").value = bin_hex(bin);
    }
    else
        fun3();
}
function fun3()
{
    var oct = document.getElementById("oct").value;
    if(oct!="")
    {
        document.getElementById("bin").value = oct_bin(oct);
        document.getElementById("dec").value = oct_dec(oct);
        document.getElementById("hex").value = oct_hex(oct);
    }
    else
        fun4();
}
function fun4()
{
    var hex = document.getElementById("hex").value;
    if(hex!="")
    {
        document.getElementById("bin").value = hex_bin(hexc);
        document.getElementById("oct").value = hex_oct(hex);
        document.getElementById("dec").value = hex_dec(hex);
    }
}
function dec_bin(dec)
{
    var bin = 0,x=dec;
    var rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin;
}
function dec_oct(dec)
{
    return dec.toString(8);
}
function dec_hex(dec)
{
    return dec.toString(16);
}
function bin_dec(bin)
{
    return parseInt(bin,2);
}
function bin_hex(bin)
{

}
function bin_oct(bin)
{

}
function oct_bin(oct)
{

}
function oct_dec(oct)
{
    return parseInt(oct,8);
}
function oct_hex(oct)
{

}
function hex_bin(hex)
{

}
function hex_dec(hex)
{
    return parseInt(hex,16);
}
function hex_oct(hex)
{
    
}