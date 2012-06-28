describe("Testing the calculator source code", function() {

  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

    describe("Sum operation test suite...", function() {
  	
  	  it("should validate sum operation using toEqual matcher", function() {
        calculator.sum(1,1);
    	expect(calculator.result).toEqual(2);
  	  });
  	});

    describe("Division operation test suite...", function() {
  	
  	  it("should validate division operation using toEqual matcher", function() {
        calculator.div(10,2);
    	expect(calculator.result).toEqual(5);
  	  });
  	});

});