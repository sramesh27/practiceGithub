const getFactorial = (inputNum) => {
    let result = 1;
    for(let i=1; i<=inputNum; i++)
    {
        result *= i;
    }
    return result;
}
console.log(getFactorial(5));