
function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = "Invalid input! Please enter valid numbers.";
    } else {
        switch (operator) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                if (number2 === 0) {
                    result = "Error: Division by zero is not allowed.";
                } else {
                    result = number1 / number2;
                }
                break;
            default:
                result = "Invalid operator selected.";
        }
    }

    document.getElementById('result').textContent = "Result = " + (isNaN(result) ? result : result.toFixed(2));
}
