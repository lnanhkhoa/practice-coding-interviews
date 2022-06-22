
export function isPalindrome(string = '') {
    if (!string) return false;
    for (let index = 0; index < string.length; index++) {
        let right = string.length - index;
        if (index > right) {
            break;
        }
        if (string[index] !== string[right - 1]) {
            return false
        }
    }
    return true;
}
