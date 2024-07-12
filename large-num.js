const number =[67,89,76,45]
let largest = number[0]
for(const num of number)
{
    if(num>largest)
    {
        largest=num
    }
}
console.log(`Largest Number is: ${largest}`)