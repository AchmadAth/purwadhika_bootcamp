// No1
class Product {
    constructor(name,price) {
        this.name = name
        this.price = price
    }
}

class Transaction extends Product {
    constructor(product) {
        this.product = product
    }
    addCart (value) {
        if (typeof value == 'string') return (this.product = value);
        return console.log(value,'bukan tipe data string');
    }
    showTotal(){
        if (!this.total) return 'Masukan ke kerangjang terlebih dahulu';
        return this.total;
    }
    checkOut(){
        return console.log('Checkout');
    }
}


class ProductTransaction extends Transaction {
    constructor(total,product,productData,qty) {
        super(total,product);
        this.productData = productData
        this.qty = qty
    }
}

const transaksi1 = [new Product('Laptop Asus',5000000),new Product('Laptop ROG',8000000),new Product('Laptop Appel',10000000)]

// console.log(transaksi1.showTotal);

//No2

const data1 = {
    a:1
}
const data2 = {
    a:1
}

function checkObject(data1,data2,key='') {
    if (data1[key] === data2[key]) {
        return console.log('True');
    } else {
        return console.log('False');
    }
}

checkObject(data1,data2,'a')

//No3

const data3 = {
    a:1,b:2
}

const data4 = {
    a:1,c:3
}

//No4

array1 = [{name:'Student 1',email:'student1@mail.com'},{name:'Student 2',email:'student2@mail.com'}]
array2 = [{name:'Student 1',email:'student1@mail.com'},{name:'Student 3',email:'student3@mail.com'}]

function concatDelete(array1,array2) {
    array3 = array1.concat(array2)
    for (let index = 0; index < array3.length; index++) {
        if (array3[index] === array3[index+1]) {
            
        }
    }
    
}

concatDelete(array1,array2)