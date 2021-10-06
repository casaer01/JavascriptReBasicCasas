const defaultResult = 0;
let currentResult = defaultResult;

currentResult = currentResult + 10;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
let errorMessage = 'An error \n' +
    ' eccurred';

outputResult(currentResult, errorMessage);