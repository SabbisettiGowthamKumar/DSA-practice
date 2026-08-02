const isPalindrome = function (num) {
  if (num < 0) {
    return false;
  }
  const originalNumber = num;
  let rev = 0;
  while (num > 0) {
    const lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return rev === originalNumber;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10101));
