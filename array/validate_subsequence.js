const sequence = [1, 6, -1, 10];
const array = [5, 1, 22, 25, 6, -1, 8, 10];

function isValidSubsequence(array, sequence) {
  if (sequence.length > array.length) return false;
  let seqIdx = 0;
  for (const element of array) {
    if (element === sequence[seqIdx]) seqIdx++;
  }
  return seqIdx === sequence.length;
}

// Do not edit the line below.
console.log(isValidSubsequence(array, sequence));
