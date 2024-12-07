var Calculator = /** @class */ (function () {
    function Calculator() {
        this.currentInput = 0;
        this.previousInput = 0;
        this.operation = "";
    }
    // Append a number to the current input
    Calculator.prototype.appendNumber = function (number) {
        this.currentInput = this.currentInput * 10 + number;
    };
    // Set the operator for calculation
    Calculator.prototype.setOperation = function (operation) {
        this.operation = operation;
        this.previousInput = this.currentInput;
        this.currentInput = 0;
    };
    // Perform the calculation
    Calculator.prototype.calculate = function () {
        var result = 0;
        switch (this.operation) {
            case "+":
                result = this.previousInput + this.currentInput;
                break;
            case "-":
                result = this.previousInput - this.currentInput;
                break;
            case "*":
                result = this.previousInput * this.currentInput;
                break;
            case "/":
                if (this.currentInput !== 0) {
                    result = this.previousInput / this.currentInput;
                }
                else {
                    throw new Error("Cannot divide by zero");
                }
                break;
            default:
                throw new Error("Invalid operation");
        }
        this.currentInput = result;
        this.operation = "";
        this.previousInput = 0;
        return result;
    };
    // Clear all inputs and operations
    Calculator.prototype.clear = function () {
        this.currentInput = 0;
        this.previousInput = 0;
        this.operation = "";
    };
    // Get the current input
    Calculator.prototype.getCurrentInput = function () {
        return this.currentInput;
    };
    return Calculator;
}());
// Example usage
var calc = new Calculator();
calc.appendNumber(5);
calc.setOperation("+");
calc.appendNumber(3);
console.log(calc.calculate()); // Outputs: 8
calc.clear();
