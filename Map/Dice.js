diceMap=new Map();
let flag = true;
while(flag)
{
    let diceValue=Math.floor(Math.random()*6)+1;
    if(diceMap.has(diceValue))
    {
        count=diceMap.get(diceValue);
        count++;
        diceMap.set(diceValue,count);
    }
    else
    {
        diceMap.set(diceValue,1);
    }
    //console.log(diceMap);
    for(let [key,value] of diceMap)
    {
        if(value==10)
        {
            flag=false;
            break;
        }
    }
}
for(let [key,value] of diceMap)
{
    if(value==Math.max(...diceMap.values()))
    console.log("Maximum occurence: "+key+" occured for "+value+" times.");
    if(value==Math.min(...diceMap.values()))
    console.log("Minimum occurence: "+key+" occured for "+value+" times.");
}
