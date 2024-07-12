const num = [10,38,67,89,94]
let sum = 0
for (let i=0;i<num.length;i++){
    if(num[i] % 2 == 1)
    {
        sum+=num[i]
    }
}
console.log(`Result: ${sum}`)