let numArray = new Array(10);
for(let i = 0; i<numArray.length; i++)
{
    numArray[i]=Math.floor(Math.random()*900)+100;
}
console.log(numArray);
for(let i = 0; i<numArray.length; i++)
{
    for(let j = 0; j<numArray.length - 1; j++)
    {
        if(numArray[j]>numArray[j+1])
        {
            let temp = numArray[j];
            numArray[j]=numArray[j+1];
            numArray[j+1]=temp;
        }
    }
}
console.log(numArray);
console.log("Second largest element: "+numArray[(numArray.length-2)]+"\nSecond smallest element: "+numArray[1]);

let sortedArray = numArray.sort();
console.log("Sorted Array is: ");
console.log("By sorting \n Second largest elemet: "+sortedArray[(sortedArray.length-2)]+"\nSecond smallest element: "+sortedArray[1]);