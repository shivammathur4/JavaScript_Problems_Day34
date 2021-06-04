io= require('console-read-write');
let primeFactorsArray= new Array();
async function PrimeFactorization()
{
    let checkForFactors= false;
    console.log("Please enter the first no. to get prime factors");
    let n= await io.read();
    for(let i=2;i<=n;i++)
    {
        if(n%i==0)
        {
           check= prime(i);
           if(!check)
           {
               console.log("Prime Factors: "+i);
               primeFactorsArray.push(i);
               checkForFactors=true;

           }
           else
           {
               continue;
           }
        }
    }
    if(!checkForFactors)
    {
        console.log("No has no prime factors, and itself is prime");
    }
    console.log("Prime Factors Array: "+primeFactorsArray);
}
function prime(n)
{
    let check=false;
    for(let i=2;i<=Math.ceil(n/2);i++)
    {
        if(n%i==0)
        {
            return true;
            break;
        }
    }
    if(!check)
    {
        return false;
    }
}
PrimeFactorization();