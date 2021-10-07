const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    return num1 + num2;
}

currentResult = add(10, 23);

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, errorMessage);
