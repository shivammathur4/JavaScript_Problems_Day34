bDayMap = new Map();
startDate=new Date("1 Jan 1992");
endDate= new Date("31 Dec 1993");
for(let i=0;i<50;i++)
{
    randomDate = new Date(startDate.getTime()+Math.random()*(endDate.getTime()-startDate.getTime()));
    bDayMap.set((i+1),randomDate);
}
sameMonthBdayMap = new Map();
for(let [key1,value1] of bDayMap)
{
    arr = [];
    month=value1.getMonth();
    for(let [key2,value2] of bDayMap)
    {
        if(value2.getMonth()==month)
        {
            arr.push(key2);
            sameMonthBdayMap.set(value2.getMonth(),arr);
        }      
    }
}
for(let [key,value] of sameMonthBdayMap)
{
    console.log("Month: "+key+". Person id: "+value);
}