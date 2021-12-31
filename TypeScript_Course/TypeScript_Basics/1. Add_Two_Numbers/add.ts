function add(num1: number, num2: number, printResult: boolean, resultPhrase: string)
{
    const result = num1 + num2;
    if(printResult)
    {
        console.log(resultPhrase + result);
    }
    else
    {
        return result;
    }
}

const num1 = 5;
const num2 = 2.5;
const printResult = true;
const resultPhrase = "Sum is : ";

add(num1, num2, printResult, resultPhrase);