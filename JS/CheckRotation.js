function fun()
{
    let str1 = document.getElementById("str1").value;
    let str2 = document.getElementById("str2").value;
    let n1 = str1.length;
    let n2 = str2.length;
    let i,j,c=0,d=0,flag=0;
    if(n1==n2)
    {
        for(i=0;i<n1;i++)
        {
            if(str1.charAt(i)==str2.charAt(c))
            {
                for(j=i;j<n1;j++)
                {
                    if(str1.charAt(j)==str2.charAt(c))
                    {
                        c++;
                        d++;
                    }
                    else
                    {
                        d=0;
                        break;
                    }
                }
                if(d>0)
                {
                    for(j=0;j<i;j++)
                    {
                        if(str1.charAt(j)==str2.charAt(c))
                        {
                            c++;
                            d++;
                        }
                        else
                        { 
                            d=0;
                            break;
                        }
                    }
                }
                if(d==n1)
                {
                    document.getElementById("result").value="Yes";
                    flag=1;
                    break;
                }
            }
            if(flag==1)
                break;
        }
        if(flag==0)
            document.getElementById("result").value="No";
    }
    else
        document.getElementById("result").value="No";
}