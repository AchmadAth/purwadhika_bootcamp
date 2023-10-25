console.log('Hello Dunia!')


let pesan;
pesan = 'halo cantik';

console.log(pesan);

var pakaian = 'baju merah' //declare & assign
pakaian = ' baju kuning' //reassign
var pakaian ='' //redeclare & reassign


let sepatu = 'converse'; //declare dan assign
sepatu = 'nike'; //reassign
// let sepatu = 'abibas'; //tidak bisa di redeclare (error ketika di run)
console.log(sepatu)

// Var dapat di re-declare, let tidak dapat re-declare

const topi = 'new era' // declare dan assign
// topi = 'NY' // tidak bisa re assign

// var dapat re declare dan re assign
// let dapat di re assign tidak bisa re declare
// cons tidak dapat keduanya

let say = 'helo'
let say2 = 'hello 2'
let say_ = 'hello _'
let say$ = 'hello $'

// let console = 'asp'
// console.log('console')

// STRING;
// '' "" ``

// NUMBER;
let angka = 999999;
let angka2 = 001123;
console.log(angka2)

let aa = 12333333n;
console.log(aa)

//BOOLEAN
let benar = true;
let salah = false;

// null
let Null = null; // digunakan sebagai variabel yang akan diisi nanti
console.log(Null);

let undidsd;
console.log(undidsd);


//object

const mobil = {
    warna:'merah',
    merek:'toyota'
}

console.log(mobil)


let name = 'joni';
let newName = name
newName = 'jhon';

let person = {
    name : 'joni',
    age : 26
}

let deepCopy = person;
let shallowCopy = {...person}

let a = 'a'
let b = a;
b = 'b'
let c = { ...a }

console.log(a,b,c)

console.log(person.name)


let string3 = 'hello burung';
console.log(string3);
console.log(string3.replace('hello','hai'))
console.log(string3)

console.log(`asi laeo ${string3} kamu kamu`);