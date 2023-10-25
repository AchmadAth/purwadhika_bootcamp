// for (let i=0;i<5;i++) {
//     console.log(i)
// }

let a = ['ato','ganteng','mantul']


for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
    
}

let b = 0
while (b<3) {
    console.log('halo');
    b++;
}

for (let i=0;i<200;i++) {
    if(i%2==0) continue;
    console.log(i)
}

const factnum = 13;
let result = 1

for(let i = 1; i <= factnum; i++) {
    result *= i;
  }
console.log(`factorial dari ${factnum} adalah ${result}`)