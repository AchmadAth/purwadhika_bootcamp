const bmw = {
    brand : 'bmw',
    model : 'm13451',
    price : 1000000000
}

const tyt = {
    brand : 'tyotota',
    model : 'asww',
    price : 5000000000
}

class Car {
    constructor (brand,model,price) {
        this.brand = brand
        this.model = model
        this.price = price
    }
}

const honda = new Car('honda','jazz')

console.log(honda);

const user = {
    greet(name) {
        console.log(`Hello ${name}`);
    }
}

user.greet('ato')



const person = {
    name: 'frans',
    age : 22,
    address : {
        street : 'jalan batu raya',
        postal_code : 105090
    }
}

person.hobby = 'asdw'
console.log(person);
delete person.hobby
console.log(person.address.postal_code);

console.log(person?.address?.postal_code);




console.log(person.age);
console.log(person['age']);


console.log('############');
for (let key in person) {
    console.log(person[key]);
}
    
const usernew = {
    firstName : 'sasuke',
    lastName : 'blyad',
    get fullname(){
        return this.firstName + ' ' + this.lastName
    },
    set fullname(value='') {
        const splittedValue = value.split(' ')
        this.firstName = splittedValue[0]
        this.lastName = splittedValue[1]
    }
};


console.log(usernew.fullname);
usernew.fullname = 'naruto usumaki'
console.log(usernew.fullname);





const computer = {
    vga : '30063',
    processor : 'i7'
}

const {vga,processor} = computer
console.log(vga);

let data1 = [1,2,3];
let data2 = [4,5,6];
let data3 = data1.concat(data2)
let data4 = [...data1,...data2]

console.log(data4);