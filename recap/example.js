class Calculator {
    sum(a, b) {
        return a + b;
    }
    sub(a, b) {
        return a - b;
    }
    mult(a, b) {
        return a * b;
    }
    div(a, b) {
        return a / b;
    }
}

//instanciar o objeto
const calculatorObject = new Calculator();
calculatorObject.sum(1, 2);
calculatorObject.sub(1, 2);
calculatorObject.mult(1, 2);
calculatorObject.div(1, 2);


const names = 'string';
function sum(a, b) {
    return a + b + names
}