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

  Fizzbuzz.prototype.response = function(num) {
    if(this.isDivisibleByFifteen(num)) {
      return 'Fizzbuzz';
    }
    if(this.isDivisibleByThree(num)) {
      return 'Fizz';
    }
    if(this.isDivisibleByFive(num)) {
      return 'Buzz'; }
    {
      return num;
    }

  };
}
