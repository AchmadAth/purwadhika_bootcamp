class Toko{
    #stock
    constructor(name,price) {
        this.name = name
        this.price = price

    }
    showStock(){
        if (!this.#stock) return 'set stock terlebih dahulu';
        return this.#stock;
    }
    setStock(value){
        if (typeof value == 'number') return (this.#stock = value);
        return console.log(value,'bukan tipe data number');
    }
}


const keyboard = new Toko(50,10000)

console.log(keyboard.setStock(60));



class Book extends Toko {
    constructor(name,price,author,releaseYear) {
        super(name,price);
        this.author = author
        this.releaseYear = releaseYear
    }
}

const komik = new Book('Buku komik',5000,'si ujang',1999)
console.log(komik);
komik.setStock(50)
console.log(komik.showStock());