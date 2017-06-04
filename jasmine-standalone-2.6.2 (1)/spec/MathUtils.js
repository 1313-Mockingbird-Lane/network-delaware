/*

            **DEMO JASMINE TEST**
            **DEMO JASMINE TEST**
            **DEMO JASMINE TEST**
            **DEMO JASMINE TEST**

*/

describe("MathUtils", function() {
    var calc;

    beforeEach(function() {
        calc = new MathUtils();
    });
 
    describe("when calc is used to peform basic math operations", function(){

        it("should be able to calculate sum of 3 and 5", function() {
            expect(calc.sum(3,5)).toEqual(8);
        });

        it("should be able to multiply 10 and 40", function() {
            expect(calc.multiply(10, 40)).toEqual(400);
        });

        it("should be able to calculate factorial of 9", function() {
            expect(calc.factorial(9)).toEqual(362880);
        });
         
        it("should be able to throw error in factorial operation when the number is negative", function() {
            expect(function() { 
                calc.factorial(-7)
            }).toThrowError(Error);
        });
         
    });
});