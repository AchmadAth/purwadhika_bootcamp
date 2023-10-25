let age = 1;

if(age>= 17) {
    console.log('anda dapat membuat ktp')
} else {
    console.log('umur lo gacukup')
}


let grade = 'B';
if (grade === 'A') console.log('excellent');
else if (grade === 'B') console.log('great');
else if (grade === 'C') console.log('average')
else console.log('NILAI LU JELEK')

let kota = 'a kidul', provinsi = 'banten'

if (provinsi === 'banten' && kota === 'tanggerang') {
    console.log('welcome to bst city')
} 
else if (provinsi === 'banten' && kota === 'tanggerang kidul') {
    console.log('welcome to pasar lama')
} 
else 
{
    console.log('kamu di bekasi');
}

let gender = 'men'
let umur = 17;

if(gender ==='men'){
    if(age <= 17 ) console.log('anak cowo');
    else if (age >10 && age <= 17 ) console.log('cowo remaja')
    else console.log('pria dewasa')
} 
else if(gender ==='woman'){
    if(age <= 17 ) console.log('anak cewe');
    else if (age >10 && age <= 17 ) console.log('cewe remaja')
    else console.log('wanita dewasa')
} 

//switch case

const fruit = 'anjing';
switch (fruit) {
    case 'papaya' : 
        console.log('ini pepaya');
        break;
    case 'mangoes' :
        console.log('ini buah mangga');
        break;
    case 'jeruk' : 
        console.log('ini jeruk');
        break;
default:
    console.log('ini batu');
}

let film = 'bokep'

film == 'bokep' ? console.log('film bokep') : console.log('bukan film okep')


let megara = 'korea'

negara == 'korea' ? console.log('halo korea') : (negara == 'indonesia' ? console.log('halo indonesia'): console.log('halo bekasi')) 