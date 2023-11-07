// No1
function titleToNumber(columnTitle) {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
      const char = columnTitle.charCodeAt(i) - 64; // Convert character to number (A=1, B=2, ..., Z=26)
      result = result * 26 + char;
    }
    return result;
  }
  console.log(titleToNumber("AA")); // Output: 27
  console.log(titleToNumber("AB")); // Output: 28
  
//No 2
function findSingleNumber(nums) {
    let result = 0;
    for (const num of nums) {
      result ^= num;
    }
    return result;
  }
  
  // Example usage:
  console.log(findSingleNumber([2, 3,2]));          // Output: 1
  console.log(findSingleNumber([4, 1, 2, 1, 2]));    // Output: 4
  console.log(findSingleNumber([1]));                // Output: 1
