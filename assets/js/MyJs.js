function Calculator() {
}

Calculator.prototype.sum = function(firstOperand, secondOperand) {
  this.result = firstOperand + secondOperand;
};

Calculator.prototype.div = function(firstOperand, secondOperand) {
  this.result = firstOperand / secondOperand;
};