function fact()
{
    let n = document.getElementById("ab").value;
    let sum;
    sum=1;
    for(let i=n;i>0;i--)
    {
        sum=sum*i;
    }
    document.getElementById("dj").value = sum;
}
function fib()
{
    let n = document.getElementById("ab").value;
    let a,b,c;
    let res="";
    a=0;
    b=1;
    c=1;
    if(n>=1)
    {
        res+=a;
        res+=' ';
    }
    if(n>=2)
    {
        res += b;
        res+=' ';
    }
    for(let i=2;i<n;i++)
    {
        c=a+b;
        res+=c;
        res+=' ';
        a=b;
        b=c;
    }
    document.getElementById("dj").value = res;
}
function prime()
{
    let n = document.getElementById("ab").value;
    let count=0;
    for(let i=2;i<n;i++)
    {
        if(n%i==0)
            count++;
    }
    if(count==0)
    {
        document.getElementById("dj").value = 'Prime';
    }
    else
    {
        document.getElementById("dj").value = 'Not Prime';
    }
}
function fun()
{
    let n = document.getElementById("ab").value;
    let l;
    l=n.length;
    let f=true;
    for(let i=0;i<l/2;i++)
    {
        if(n[i]!==n[l-i-1])
        {
            f=false;
            break;
        }
    }
    if(f==false)
    {
        document.getElementById("dj").value = 'Not a Palindrome';
    }
    else
    {
        document.getElementById("dj").value = 'Palindrome';
    }
}