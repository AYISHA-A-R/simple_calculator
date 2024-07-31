let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function deleteDigit() {
    display.textContent = display.textContent.slice(0, -1) || '0';
}

function appendNumber(number) {
    if (display.textContent == '0') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function appendOperator(operator) {
    display.textContent += operator;
}

function calculate() {
    try {
        display.textContent = eval(display.textContent) || '0';
    } catch {
        display.textContent = 'Error';
    }
}
