const prompt = require("prompt-sync")();
function prime(n)
{
    for(let i=1;i<=n;i++)
    {
        if(n%i==0)
        {
            c++;
        }
    }

    return c;
}
let c=0;
let n = (parseInt(prompt("Enter Number: ")));
prime(n);
if(c==2)
{
    console.log("Prime !! ");
}
else
{
    console.log("Not Prime !!")
}



