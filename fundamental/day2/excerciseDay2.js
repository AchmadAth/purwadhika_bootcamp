let celcius = 60; fahrenheit = celcius * 9/5 + 32;
console.log('No 1 ', celcius,' celcius sama dengan ', fahrenheit, ' fahrenheit');

let number = 25;
if (number%2==0) {
    console.log('No 2 ',number,' adalah bilangan genap')
} else {
    console.log('No 2 ',number,' adalah bilangan ganjil')
}

var n = 7;
var isPrime = true;

if (n <= 1) {
  isPrime = false;
} else {
  // for (let i = 2; i <= Math.sqrt(n); i++) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log('No 3',n + ' adalah bilangan prima');
} else {
  console.log('No 3',n + ' adalah bukan bilangan prima');
}

let number2 = 3
let sum = 0 
for (let index = 1; index <= number2; index++) {
    sum += index
}
console.log('No 4 n =',number2,'adalah',sum);

let factnum = 4
let factorial = 1

for (let index = 1; index <= factnum; index++) {
    factorial *= index;
    
}
console.log('No 5 Factorial dari',factnum,'adalah',factorial);

var n = 15;
var fib = [0, 1];

for (var i = 2; i <= n; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib);
console.log('No 6 Fibonaci dari',n,'adalah',fib.pop());
