const defaultResult = 0;
let currentResult = defaultResult;

function getUserNum() {
    return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBefore, calcNumber) {
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription)
}

function add() {
    const userNum = getUserNum();
    const initialResult = userNum;
    currentResult = currentResult + userNum;
    createAndWriteLog("+", initialResult, userNum);
}

function subtract() {
    const userNum = getUserNum();
    const initialResult = userNum;
    currentResult = currentResult - userNum;
    createAndWriteLog("-", initialResult, userNum);
}

function multiply() {
    const userNum = getUserNum();
    const initialResult = userNum;
    currentResult = currentResult * userNum;
    createAndWriteLog("*", initialResult, userNum);
}

function divide() {
    const userNum = getUserNum();
    const initialResult = userNum;
    currentResult = currentResult / userNum;
    createAndWriteLog("/", initialResult, userNum);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);



