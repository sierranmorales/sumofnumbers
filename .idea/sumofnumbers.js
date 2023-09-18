/* Write four functions that return the sum of the numbers in a given list using a for-loop, a while-loop, recursion, and underscore. Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay.

 */

const testData = [1, 2, 3, 4, 5];

function sumFor(numList){
  let sum = 0;

  for(const num of numList){
    sum += num;
  }
  return sum;
}

function sumWhile(numList) {
  let sum = 0;
  let i = 0;

  while (i < numList.length) {
    sum += numList[i];
    i++;
  }
  return sum;
}

function sumRecursion(numList){
  let sum = 0;

  if (numList.length === 0){
    return sum;
  }
  return numList[0] += sumRecursion(numList.slice(1, numList.length))

}

function sumTheSimpleWay(numList){
  return _.reduce(numList, function(memo, num) {
    return memo + num;
    }, 0);
}


console.log(sumTheSimpleWay(testData));