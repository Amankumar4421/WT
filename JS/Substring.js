function fun()
{
    let str = document.getElementById("ab").value;
    let sub = document.getElementById("abc").value;
    let n = str.length;
    let a = sub.length;
    let d = a,flag=0;
    while(d<=n)
    {
        for(let k=0;k+d-1<n;k++)
        {
            let c=0;
            temp=str.substring(k,k+d);   
            for(let i=0;i<a;i++)
            {
                let f=0;
                for(let j=0;j<d;j++)
                    if(sub.charAt(i)==temp.charAt(j))
                        f=1;
                if(f==1)
                    c++;
                else
                    break;
            }
            if(c==a)
            {
                flag=1;
                document.getElementById("dj").value=temp;
                break;
            }
        }
        if(flag==1)
            break;
        d++;
    }
}