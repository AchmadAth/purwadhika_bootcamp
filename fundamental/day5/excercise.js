console.log('##### NO 1 #####');
let arr = [12,5,23,18,4,45,32]
function avg(arr) {
    var sum = 0;
 
    // Iterate the elements of the array
    arr.forEach(function (item, idx) {
      sum += item;
    });
 
    // Returning the average of the numbers
    return sum / arr.length;
  }

console.log(`lowest : ${Math.min(...arr)}, highest ${Math.max(...arr)}, average : ${avg(arr)}`);

console.log('##### NO 2 #####');
function concatenateWords(arr) {
    if (arr.length === 0) {
      return "";
    } else if (arr.length === 1) {
      return arr[0];
    } else {
      const wordsExceptLast = arr.slice(0, arr.length - 1).join(", ");
      const lastWord = " and " + arr[arr.length - 1];
      return wordsExceptLast + lastWord;
    }
  }
  
  // Example usage:
  const buah = ["apple", "banana", "cherry", "date"];
  const result = concatenateWords(buah);
  console.log(result); // Output: "apple, banana, cherry, and date"
  

console.log('##### NO 3 #####');
function splitStringIntoWords(str) {
    return str.split(' ');
  }
console.log(splitStringIntoWords('Hello World'))

console.log('##### NO 4 #####');
let arr1 = [1,2,3], arr2 = [3,2,1]

function arr_sum(arr1,arr2) {
    let arr3 = [0,0,0]
    arr3[0] = arr1[0] + arr2[0]
    arr3[1] = arr1[1] + arr2[1]
    arr3[2] = arr1[2] + arr2[2]
    return arr3
} 

console.log(arr_sum(arr1,arr2));

console.log('##### NO 5 #####');
function add_element(arr, newElement) {
    if (arr.indexOf(newElement) === -1) {
      arr.push(newElement);
    }
    return arr;
  }

let arr4 = [1,2,3,4]
console.log(add_element(arr4,7));

console.log('##### NO 6 #####');
function remove_odd(arr) {
    arr_temp = []
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 === 0 ) {
            arr_temp.push(arr[index])
        }
    } return arr_temp
}

let arr5 =[1, 2, 3, 4, 5, 6] 
console.log(remove_odd(arr5));


console.log('##### NO 7 #####');
function multipleint(max_size,...integer) {
    let kosong = []
    for (let index = 0; index < max_size; index++) {
        kosong.push(integer[index])
    } return kosong
}
max_size = 5
console.log(multipleint(max_size,5, 10, 24, 3, 6, 7, 8));

console.log('##### NO 8 #####');
function concatArray(arr1, arr2) {
    return arr1.concat(arr2);
  }

console.log(concatArray(arr1,arr2));


console.log('##### NO 9 #####');
const arry = [1, 2, 1, 3, 4, 3, 5];

function findDuplicate(arr) {
    for (let index = 0; index < arr.length; index++) {

    }
}

console.log(findDuplicate(arry));

console.log('##### NO 10 #####');
function findArrayDifference(arr1, arr2) {
    const difference = [];
  
    for (const value of arr1) {
      if (!arr2.includes(value)) {
        difference.push(value);
      }
    }
  
    for (const value of arr2) {
      if (!arr1.includes(value)) {
        difference.push(value);
      }
    }
  
    return difference;
  }
  
  // Example usage:
  const arra = [1, 2, 3, 4, 5];
  const arrb = [3, 4, 5, 6, 7];
  const differenceArray = findArrayDifference(arra, arrb);
  console.log(differenceArray); // Output: [1, 2, 6, 7]
  
  console.log('##### NO 11 #####');
  function filterPrimitives(arr) {
    return arr.filter(item => {
      return (typeof item !== 'object' && typeof item !== 'function') || item === null;
    });
  }

  primitive_arr = [1, [], undefined, {}, "string", {}, []];

  console.log(filterPrimitives(primitive_arr));

console.log('##### NO 12 #####');
function secondsmallest(arr) {
    arr.sort()
    return arr[1]
}

console.log(secondsmallest(arr1));

console.log('##### NO 13 #####');
function sumNumbersInArray(arr) {
    let sum = 0;
  
    for (const item of arr) {
      if (typeof item === 'number' && !isNaN(item)) {
        sum += item;
      }
    }
  
    return sum;
  }
  
  // Example usage:
  const mixedArray = ["3", 1, "string", null, false, undefined, 2];
  const totalSum = sumNumbersInArray(mixedArray);
  console.log(totalSum); // Output: 6 (1 + 2 + 3)
  
console.log('##### NO 14 #####');


console.log('##### NO 15 #####');

function jankenpon(pilihan) {
    bot = ['rock','paper','scissors']
    random = Math.floor(Math.random() * bot.length);
    console.log(`Bot : ${bot[random]} \nPlayer : ${pilihan}`);
    if (bot[random] == pilihan) {
        return 'Draw'
    } else if (
        (pilihan === "rock" && bot[random] === "scissors") ||
        (pilihan === "paper" && bot[random] === "rock") ||
        (pilihan === "scissors" && bot[random] === "paper")
    ) {
        return "Win"
    } else {
        return "Lose"
    }
}

console.log(jankenpon('rock'))