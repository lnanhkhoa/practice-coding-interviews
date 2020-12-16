
const array = [12, 3, 1, 2, -6, 5, -8, 6]
const targetSum = 0;

function threeNumberSum(array = [], targetSum = 0) {
  // Write your code here.
  const resultArray = [];
  const sortedArray = array.sort((a, b) => a - b);
  for (let firstIdx = 0; firstIdx < sortedArray.length - 2; firstIdx++) {
    const firstElement = sortedArray[firstIdx];

    for (let secondIdx = firstIdx + 1; secondIdx < sortedArray.length - 1; secondIdx++) {
      const secondElement = sortedArray[secondIdx];
      const lastElement = targetSum - (firstElement + secondElement);

      for (let index = secondIdx + 1; index < sortedArray.length; index++) {
        if(secondElement === 3) console.log(index)
        const thirdElement = sortedArray[index];
        if (lastElement === thirdElement) resultArray.push([firstElement, secondElement, thirdElement]);
      }
    }
  }

  return resultArray;

}

// Do not edit the line below.
console.log(threeNumberSum(array, targetSum));
