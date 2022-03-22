const isPalindrome2 = n => {
    if (n < 0)
    {
        return false;
    }
    let num = Math.abs(n); //The Math. abs() function returns the absolute value of a number. That is, it returns n if n is positive or zero, and the negation of n if n is negative.
    const arr = [];
    let i = 1;
    while (num > 0) {
      const min = num % (10 ** i);
      num = num - min;
      i++;
      arr.push(min);
    }
    i = i - 2;
    let j = 0;

    //array.reduce() is a useful method that reduces an array to a value. array.reduce(callback, initialValue) accepts 2 arguments
    return n === arr.reduce((res, x) => {
      const add = (x/ (10 ** j)) * (10 ** i);
      res += add;
      i--;
      j++;
      return res;
    }, 0);
  };

  console.log(isPalindrome2(121));
