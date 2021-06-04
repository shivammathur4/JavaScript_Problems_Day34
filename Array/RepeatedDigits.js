repeatedDigitsArr=[];
for(let i=10;i<100;i++)
{
    let onesDigit=i%10;
    let tensDigit=(i-onesDigit)/10;
    if(onesDigit==tensDigit)
    {
        console.log(i);
        repeatedDigitsArr.push(i);
    }
}
console.log("Repeated digits content:") 
console.log(repeatedDigitsArr); 
