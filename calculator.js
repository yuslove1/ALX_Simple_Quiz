function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    return number1 / number2;
}

// Addition
document.getElementById('add').addEventListener('click', () =>{
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = add(number1, number2);

    document.getElementById('calculation-result').textContent = result;
})

// Substraction
document.getElementById('subtract').addEventListener('click', () =>{
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = subtract(number1, number2);

    document.getElementById('calculation-result').textContent = result;
})

// Multiplication
document.getElementById('multiply').addEventListener('click', () =>{
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = multiply(number1, number2);

    document.getElementById('calculation-result').textContent = result;
})

// Division
document.getElementById('divide').addEventListener('click', () =>{
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = divide(number1, number2);

    document.getElementById('calculation-result').textContent = result;
})