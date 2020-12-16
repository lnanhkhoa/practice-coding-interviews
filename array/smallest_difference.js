

const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17]


function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  const absDiff = [];
  const saveElement = [];
  for (let firstIdx = 0; firstIdx < arrayOne.length; firstIdx++) {
    const firstElement = arrayOne[firstIdx];
    let compareArray = [];

    for (let secondIdx = 0; secondIdx < arrayTwo.length; secondIdx++) {
      const secondElement = arrayTwo[secondIdx];
      const diff = secondElement - firstElement;
      if (diff >= 0) {
        compareArray.push(diff)
      } else {
        compareArray.push(-diff)
      }
    }
    const smallestDiff = Math.min(...compareArray);
    const secondIndex = compareArray.findIndex(i => i === smallestDiff);
    saveElement.push([firstElement, arrayTwo[secondIndex]]);
    absDiff.push(smallestDiff);
  }
  const smallestAbsDiff = Math.min(...absDiff);
  const finallyIndex = absDiff.findIndex(i => i === smallestAbsDiff);
  return saveElement[finallyIndex];
}

// Do not edit the line below.
console.log(smallestDifference(arrayOne, arrayTwo));
