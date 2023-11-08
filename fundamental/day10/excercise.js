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
  console.log(titleToNumber("AAA")); // Output: 28
  
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


  function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = {};

    // Count the occurrences of each character in s
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        count[char] = (count[char] || 0) + 1;
    }

    // Subtract the occurrences of each character in t
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        count[char] = (count[char] || 0) - 1;
    }

    // Check if all counts are 0
    for (const char in count) {
        if (count[char] !== 0) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false



function climbStairs(n) {
  if (n <= 2) {
      return n;
  }

  const dp = [1, 2];

  for (let i = 2; i < n; i++) {
      dp[i] = dp[i-1] + dp[i-2];
  }

  return dp[n-1];
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
