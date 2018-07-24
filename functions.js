console.log("Even");
function isEven(num) {
  if(num % 2 !== 1) {
    return true;
  } else {
    return false;
  }
}
console.log("Factorial");
function factorial(num) {
  var result = 1;
  for(var i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log("kebabToSnake");
function kebabToSnake(str) {
  var kebab = str.replace("-","_");
  return kebab;
}
