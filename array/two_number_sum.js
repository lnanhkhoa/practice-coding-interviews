const array = [4, 6, 1];
const targetSum = 5;

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    const firstElement = array[i];
    for (let j = i+1; j < array.length; j++) {
      const secondElement = array[j];
      if (firstElement + secondElement === targetSum) {
        return [firstElement, secondElement];
      }
    }
  }
  return [];
}

console.log(twoNumberSum(array, targetSum));
