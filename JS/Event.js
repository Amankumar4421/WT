function Hide(){
    let para = document.getElementById("para");
    if(para.style.display!='none')
    para.style.display='none';
    else
    para.style.display='block';
}


document.getElementById("para").addEventListener("copy",showdate);

function showdate(){
    document.getElementById('demo').innerHTML=Date();
}