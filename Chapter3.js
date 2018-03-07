// Exercise 3.1: Minimum
function min(num1, num2) {
  return (num1 < num2) ? num1 : num2;
}

// Exercise 3.2: Recursion
function isEven(num) {
  if(num == 0)
    return true;
  if(num == 1)
    return false;
  else
    return isEven(Math.abs(num - 2));
}

//Exercise 3.3: Bean counting
function countChar(str, char) {
  let count = 0;
  for(let i = 0; i < str.length; i++) {
  	if(str.charAt(i) == char)
      count++;
  }
  return count;
}

function countBs(str) {
  return countChar(str, "B");
}
