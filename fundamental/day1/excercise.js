// Write code to find area of rectangle
// PSEUDO
// 1. rumus luas persegi adalah panjang * lebar maka
// 2. buat dua variabel bernama panjang dan lebar
// 3. buat variabel luas sesuai dengan rumus, luas = panjang * lebar
//CODE
let panjang = 5, lebar = 3, luas = panjang * lebar
console.log(`NO 1 \nluas persegi panjang dari panjang ${panjang} dan lebar ${lebar} adalah ${luas}`)

//find perimeter of rectangle
//PSEUDO
// 1. rumus keliling persegi panjang adalah 2 * (panjang + lebar)
// 2. buat 2 variabel bernama panjang dan lebar
// 3. buat variabel keliling sesuai dengan rumus, 2 * (panjang + lebar)
//CODE
let panjang2 = 5, lebar2 = 3, keliling = 2*(panjang2 + lebar2)
console.log(`\nNO 2 \nKeliling dari persegi panjang dari panjang ${panjang2} dan lebar ${lebar2} adalah ${keliling}`)

// find diameter, circumfrence and area of circle
// rumus diameter = 2 * radius
// rumus cicumfrence = 2 * PI * radius
// rumus area of circle = PI * radius * radius
// 1. buat variabel radius
// 2. buat variabel PI
// masukkan rumus masing2 variabel diameter, circumfrence, dan area of circle
//CODE
let radius = 5, PI = Math.PI, diameter = 2 * radius, circumfrence = 2 * PI * radius, CircleArea = PI*radius**2
console.log(`\nNO 3 \nLingkaran dengan radius ${radius} memiliki Diameter ${diameter}, Keliling ${circumfrence}, dan luas ${CircleArea}`);


//WRITE CODE TO FIND ANGLES OF TRIANGLES IF TWO ANGLES ARE GIVEN
//PSEUDOCODE
//1. CARI TAHU RUMUS
//2. THIRDANGLES = 180 - (FIRSTANGLE-SECONDANGLE)
//3. BUAT 2 VARIABEL FIRSTANGLE DAN SECONDANGLE
//CODE
let FIRSTANGLE = 80, SECONDANGLE = 65, THIRDANGLES = 180 - (FIRSTANGLE+SECONDANGLE)
console.log(`\nNO. 4 \nDiberikan sudut pertama ${FIRSTANGLE} dan sudut kedua ${SECONDANGLE} maka sudut ketiga adalah ${THIRDANGLES}`)

//WRITE A CODE TO GET DIFFERENCE BETWEEN DATE IN DAYS
//PSEUDOCODE
//1. Mengurai tanggal masukan dan membuat objek Tanggal
//2. Menghitung perbedaan dalam milidetik
//3. Mengonversi perbedaan dari milidetik ke hari
//CODE
let tanggal1  = new Date('2022-01-20');
let tanggal2 = new Date('2022-01-22');
let perbedaanDalamMilidetik = Math.abs(tanggal2 - tanggal1);
let perbedaanDalamHari = perbedaanDalamMilidetik / (1000 * 60 * 60 * 24)

console.log(`\nNO. 5 \nPerbedaan tanggal ${tanggal1} dan tanggal ${tanggal2} adalah ${perbedaanDalamHari} hari.`);

let days = 400
var years = Math.floor(days / 365);
let left_days = days % 365;
var months = Math.floor(left_days / 30);
left_days = left_days % 30;

console.log(`\nNO. 6 \n${days} hari terdiri dari ${years} tahun, ${months} bulan, dan ${left_days} hari.`);