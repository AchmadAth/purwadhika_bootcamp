console.log('##### NO1 #####');
function createTrianglePattern(height) {
    let count = 1;
    
    for (let i = 1; i <= height; i++) {
      let row = '';
      
      for (let j = 1; j <= i; j++) {
        row += count < 10 ? '0' + count : count;
        if (j < i) {
          row += ' ';
        }
        count++;
      }
      
      console.log(row);
    }
  }
  
createTrianglePattern(4)

console.log('##### NO2 #####');
function fizzbuzz(n) {
    container = ''
    for (let index = 1; index <= n; index++) {
        if (index % 3 === 0 & index % 5 === 0) {
            container += 'FizzBuzz'
        } else if (index % 3 === 0) {
            container += 'Fizz'
        } else if (index % 5 === 0) {
            container += 'Buzz'
        }
        else {
            container += index
        }
        container += ','
    
    }
    console.log(container);
}

fizzbuzz(15)

console.log('##### NO3 #####');
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    
    if (bmi < 18.5) {
      return 'less weight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'ideal';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      return 'overweight';
    } else if (bmi >= 30.0 && bmi <= 39.9) {
      return 'very overweight';
    } else {
      return 'obesity';
    }
  }

console.log(calculateBMI(50,180))



console.log('##### NO4 #####');
function removeOddNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }

let aray = [1,2,3,4,5,6,7,8,9,10]
console.log(removeOddNumbers(aray))

console.log('##### NO5 #####');
function splitStringIntoWords(str) {
    return str.split(' ');
  }
console.log(splitStringIntoWords('Hello World'))