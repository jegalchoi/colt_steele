console.log("printReverse");

function printReverse(arr) {
  for (var i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

console.log("isUniform");

function isUniform(array) {
  for(var i = 1; i < array.length; i++) {
    if (array[0] !== array[i]) {
      return false;
    }
  }
  return true;
}


console.log("sumArray");

function sumArray(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log("max");

function max(array) {
  var maximum = array[0];
  for(var i = 1; i < array.length; i++) {
    if (array[i] >= maximum) {
      maximum = array[i];
    }
  }
  return maximum;
}
