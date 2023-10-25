//1
let num = 9, kosong = ''


for (let index = 1; index <= num+1; index++) {
    kosong += `9 x ${index}\n`
}
console.log(kosong)

//2
let word = 'madam',
reverse_word = Array.from(word).reverse().join('')
word == reverse_word ? console.log(word,'--> palindrome') : console.log('not palindrome')

//3
let cm = 100000, km = cm/100000
console.log(km,'km');

//4 
let raw_num = 1000, idr_num = raw_num.toLocaleString('id-ID')
console.log(`Rp. ${idr_num},00`);

//5
let word2 = 'Hello World',
search_word = 'ell',
replaced_word = word2.replace(search_word,'')
console.log(replaced_word);

//6
capitalize = '', word_hello = 'hello word'
for (let i = 0; i < word_hello.length; i++ ) {
    if (i==0 || word_hello.charAt(i-1)==' ')
    capitalize += word_hello.charAt(i).toUpperCase();
    else capitalize += word_hello.charAt(i).toLowerCase()
}
console.log(capitalize)

//7
word = 'hello'
reverse_word = Array.from(word).reverse().join('')
console.log(reverse_word);

//8
let word3 = 'The QuiCk BrOwN Fox', reversed_cased = ''
for(let i = 0; i < word3.length; i++) {
    if(word3.charAt(i).toUpperCase() == word3.charAt(i))
        reversed_cased += word3.charAt(i).toLowerCase()
    else reversed_cased += word3.charAt(i).toUpperCase()
}
console.log(reversed_cased)

//9
let num1=42,num2=27
if (num1>num2) {
    console.log(num1);
} else {
    console.log(num2);
}

//10 
const num5 = 42;
const num6 = 27;
const num7 = 33;

const sortedNumbers = [num5, num6, num7].sort((a, b) => b - a);

console.log(sortedNumbers);

//11
let isi = 'hello',isi2 = 1, isi3 = Date('2023-01-01')
if (typeof(isi) === 'string') {
    console.log(1)
} else if (typeof(isi) === 'number') {
    console.log(2)
} else {
    console.log(3)
}

//12
let word4 = 'An apple a day keep the doctor away',
search_word4 = /a/g,
lower_cased = word4.toLowerCase(),
replaced_word4 = lower_cased.replace(search_word4,'*')
console.log(replaced_word4);
