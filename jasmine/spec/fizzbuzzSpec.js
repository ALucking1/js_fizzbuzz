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

  describe('when playing, the response will be', function() {
    it('Fizz if divisible by 3', function() {
      expect(fizzbuzz.response(3)).toEqual('Fizz');
    });

    it('Buzz if divisible by 5', function() {
      expect(fizzbuzz.response(5)).toEqual('Buzz');
    });

    it('Fizzbuzz if divisible by 15', function() {
      expect(fizzbuzz.response(15)).toEqual('Fizzbuzz');
    });

    it('number if not divisible by 3, 5 or 15', function() {
      expect(fizzbuzz.response(4)).toEqual(4);
    });
  });
});
