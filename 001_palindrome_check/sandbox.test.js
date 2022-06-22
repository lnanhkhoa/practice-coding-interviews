


import { isPalindrome } from './solution'

test('001_palindrome_check unit test', () => {
  expect(isPalindrome('abcdcba')).toBe(true);
  expect(isPalindrome('a')).toBe(true);
  expect(isPalindrome('ab')).toBe(false);
  expect(isPalindrome('aba')).toBe(true);
  expect(isPalindrome('abb')).toBe(false);
  expect(isPalindrome('abba')).toBe(true);
  expect(isPalindrome('abcdefghhgfedcba')).toBe(true);
  expect(isPalindrome('abcdefghihgfedcba')).toBe(true);
  expect(isPalindrome('abcdefghihgfeddcba')).toBe(false);
  expect(isPalindrome('fail')).toBe(false);
})

