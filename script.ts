class Calculator {
    private currentInput: number;
    private previousInput: number;
    private operation: string;
  
    constructor() {
      this.currentInput = 0;
      this.previousInput = 0;
      this.operation = "";
    }
  
    // Append a number to the current input
    public appendNumber(number: number): void {
      this.currentInput = this.currentInput * 10 + number;
    }
  
    // Set the operator for calculation
    public setOperation(operation: string): void {
      this.operation = operation;
      this.previousInput = this.currentInput;
      this.currentInput = 0;
    }
  
    // Perform the calculation
    public calculate(): number {
      let result: number = 0;
  
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
          } else {
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
    }
  
    // Clear all inputs and operations
    public clear(): void {
      this.currentInput = 0;
      this.previousInput = 0;
      this.operation = "";
    }
  
    // Get the current input
    public getCurrentInput(): number {
      return this.currentInput;
    }
  }
  
  // Example usage
  const calc = new Calculator();
  calc.appendNumber(5);
  calc.setOperation("+");
  calc.appendNumber(3);
  console.log(calc.calculate()); // Outputs: 8
  calc.clear();
  