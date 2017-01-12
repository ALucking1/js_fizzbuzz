describe('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by three', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by five', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by fifteen', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when a number is not', function() {
    it('divisible by three', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by five', function() {
      expect(fizzbuzz.isDivisibleByFive(2)).toBe(false);
    });

    it('divisible by fifteen', function() {
      expect(fizzbuzz.isDivisibleByFifteen(17)).toBe(false);
    });
  });
});
