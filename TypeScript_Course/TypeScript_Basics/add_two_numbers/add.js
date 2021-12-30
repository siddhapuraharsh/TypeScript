function add(num1, num2, printResult, resultPhrase) {
    var result = num1 + num2;
    if (printResult) {
        console.log(resultPhrase + result);
    }
    else {
        return result;
    }
}
var num1 = 5;
var num2 = 2.5;
var printResult = true;
var resultPhrase = "Sum is : ";
add(num1, num2, printResult, resultPhrase);
