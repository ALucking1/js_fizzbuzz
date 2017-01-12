describe('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by three', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('knows when a number is not', function() {
    it('divisible by three', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
  });
});
