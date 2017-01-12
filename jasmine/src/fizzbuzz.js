function Fizzbuzz() {

  Fizzbuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
  };

  Fizzbuzz.prototype.isDivisibleByThree = function(num) {
    return this._isDivisibleBy(num, 3);
  };

  Fizzbuzz.prototype.isDivisibleByFive = function(num) {
    return this._isDivisibleBy(num, 5);
  };

  Fizzbuzz.prototype.isDivisibleByFifteen = function(num) {
    return this._isDivisibleBy(num, 15);
  };
}
