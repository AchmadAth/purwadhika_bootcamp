function luaspersegi(panjang,lebar) {
    return console.log(panjang * lebar)
}

luaspersegi(3,2)
luaspersegi(100,200)
luaspersegi(99999*1233)

function test(param1,param2,...param3) {
    console.log(param1);
    console.log(param2);
    console.log(param3);
}

test(1,2,'sss','222')


function factorial(...params) {
    let result = 0
    params.map((value) =>{
        result +=value
    })
    console.log(result);
}

factorial(1,2,3,1,1,1,1,1,1,2,23,23,2,32,3)


function factorial2(...params) {
    let result = 0
    for (let index = 0; index < params.length; index++) {
        result+=params[index]
    }
    console.log(result);
}

factorial2(1,23,23,2,32,)


const multiplier = (factor,number) => factor * number;

console.log(multiplier(1,3));

const kali = (factor) => (number) => factor * number
console.log(kali(5)(2));