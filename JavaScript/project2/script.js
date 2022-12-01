function fun(){
    var ak1=document.getElementById("ak1");
    var ak2=document.getElementById("ak2");
    var ak3=document.getElementById("ak3");
    var ak4=document.getElementById("ak4");
    var ak5=document.getElementById("ak5");
    var ak6=document.getElementById("ak6");
    var ak7=document.getElementById("ak7");
    var ak8=document.getElementById("ak8");

    const arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var str = document.getElementById("name").value;
    let name = str.split('');
    var count=name.length;
    var i=0;
    if(count>0){
        ak1.innerHTML="";
        ak2.innerHTML="";
        ak3.innerHTML="";
        ak4.innerHTML="";
        ak5.innerHTML="";
        ak6.innerHTML="";
        ak7.innerHTML="";
        ak8.innerHTML="";
    var id = setInterval(() => {
        if(arr[i]==name[0]){
            ak1.innerHTML=name[0];
            clearInterval(id);
            var j=0;
            if(count>1)
            var id1 = setInterval(() => {
                if(arr[j]==name[1]){
                    ak2.innerHTML=name[1];
                    clearInterval(id1);
                    var k=0;
                    if(count>2)
                    var id2 = setInterval(() => {
                        if(arr[k]==name[2]){
                            ak3.innerHTML=name[2];
                            clearInterval(id2);
                            var l=0;
                            if(count>3)
                            var id3 = setInterval(() => {
                                if(arr[l]==name[3]){
                                    ak4.innerHTML=name[3];
                                    clearInterval(id3);
                                    var m=0;
                                    if(count>4)
                                    var id4 = setInterval(() => {
                                        if(arr[m]==name[4]){
                                            ak5.innerHTML=name[4];
                                            clearInterval(id4);
                                            var n=0;
                                            if(count>5)
                                            var id5 = setInterval(() => {
                                                if(arr[n]==name[5]){
                                                    ak6.innerHTML=name[5];
                                                    clearInterval(id5);
                                                    var o=0;
                                                    if(count>6)
                                                    var id6 = setInterval(() => {
                                                        if(arr[o]==name[6]){
                                                            ak7.innerHTML=name[6];
                                                            clearInterval(id6);
                                                            var p=0;
                                                            if(count>7)
                                                            var id7 = setInterval(() => {
                                                                if(arr[p]==name[7]){
                                                                    ak8.innerHTML=name[7];
                                                                    clearInterval(id7);
                                                                }    
                                                                else
                                                                    ak8.innerHTML=arr[p++];
                                                            }, 100);
                                                        }    
                                                        else
                                                            ak7.innerHTML=arr[o++];
                                                    }, 100);
                                                }    
                                                else
                                                    ak6.innerHTML=arr[n++];
                                            }, 100);
                                        }    
                                        else
                                            ak5.innerHTML=arr[m++];
                                    }, 100);
                                }    
                                else
                                    ak4.innerHTML=arr[l++];
                            }, 100);
                        }    
                        else
                            ak3.innerHTML=arr[k++];
                    }, 100);
                }    
                else
                    ak2.innerHTML=arr[j++];
            }, 100);
        }    
        else
            ak1.innerHTML=arr[i++];
    }, 100);
}
}