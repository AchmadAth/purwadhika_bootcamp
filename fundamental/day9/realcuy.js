class GoFood {
    constructor (restaurant) {
        this.cart = []
        this.restaurant = restaurant
        this.ongkir = 2000
    }

    hitungTotal() {
        let totalPrice = this.cart.reduce((total,item) => total + (item.price * item.qty),0)
        let totalKirim = this.restaurant.jarak * this.ongkir
        return totalPrice + totalKirim
    }

    tambahMakanan(food) {
        const existingFoodId = this.cart.findIndex(item => item.name === food.name)
        if (existingFoodId !== -1) {
            this.cart[existingFoodId].qty += food.qty
        } else {
            this.cart.push(food)
        }
    }
    removeMakanan(foodName) {
        this.cart = this.cart.filter(item => item.name !== foodName)
    }
    editFoodQty(foodname,NewQty){
        const foodQtyEdit = this.cart.find(item => item.name =foodname)
        if (foodQtyEdit) {
            foodQtyEdit.qty = NewQty
        }
    }
}

class restoran {
    constructor(name,jarak) {
        this.name = name
        this.jarak = jarak
    }
}
class food {
    constructor(name,price,qty) {
        this.name = name
        this.price = price
        this.qty = qty
    }
}

const resto1 = new restoran('bakmi afung',13)
const pesan1 = new GoFood(resto1)
console.log(resto1)

const food1 = new food('mie ayam babi',2000,5)
console.log(food1)

pesan1.tambahMakanan(food1)

console.log(pesan1)

const food2 = new food('kwtiaw telor balado',3000,2)
pesan1.tambahMakanan(food2)
console.log(pesan1)

const food3 = new food('ayam kampus',1000,2)
pesan1.tambahMakanan(food3)
console.log(pesan1)

pesan1.removeMakanan('ayam kampus')
console.log(pesan1)

pesan1.editFoodQty('mie ayam babi',2)
console.log(pesan1)

const biayabiaya = pesan1.hitungTotal()
console.log(biayabiaya);

// Fungsi untuk membuat segitiga bintang pertama


function segitigaBintang1(tinggi) {
    for (let i = 1; i <= tinggi; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += '*';
      }
      console.log(row);
    }
  }
  
  // Fungsi untuk membuat segitiga bintang kedua
  function segitigaBintang2(tinggi) {
    for (let i = 1; i <= tinggi; i++) {
      let row = ' '.repeat(i - 1) + '*'.repeat(tinggi - i + 1);
      console.log(row);
    }
  }
  
  // Fungsi untuk membuat segitiga bintang ketiga
  function segitigaBintang3(tinggi) {
    for (let i = 1; i <= tinggi; i++) {
      let row = ' '.repeat(tinggi - i) + '*'.repeat(i);
      console.log(row);
    }
  }
  
  // Fungsi untuk membuat segitiga bintang keempat
  function segitigaBintang4(tinggi) {
    for (let i = tinggi; i >= 1; i--) {
      let row = '*'.repeat(i);
      console.log(row);
    }
  }
  
  // Fungsi untuk membuat segitiga bintang kelima
  function segitigaBintang5(tinggi) {
    for (let i = 1; i <= tinggi; i++) {
      let row = ' '.repeat(tinggi - i);
      for (let j = 1; j <= i; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  
  // Contoh penggunaan
  console.log("Segitiga Bintang 1:");
  segitigaBintang1(4);
  
  console.log("\nSegitiga Bintang 2:");
  segitigaBintang2(4);
  
  console.log("\nSegitiga Bintang 3:");
  segitigaBintang3(4);
  
  console.log("\nSegitiga Bintang 4:");
  segitigaBintang4(4);
  
  console.log("\nSegitiga Bintang 5:");
  segitigaBintang5(4);
  