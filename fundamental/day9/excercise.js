// nomor 1
// buat program order goFood
// food => { name : "capcay" , price : 50000, qty : 2 }
// pada saat menambahkan makanan yang sama , maka qty akan diupdate
// apabila makanan yg ditambah belum ada di cart maka push
// restoran => { name : "kwetiaw 99", jarak : 5 }
// 1km harga ongkir adalah 2000
// berapa total pricenya ?

// buat 4 function
// 1. hitung total biaya
// 2. addFood menambahkan makanan ke cart
// 3. menghapus makanan di cart
// 4. mengedit qty makanan tertentu di dalam cart

// CRUD = > CREATE , READ (GET=>) , UPDATE ,DELETE

class GoFood {
    constructor(restaurant) {
      this.cart = [];
      this.restaurant = restaurant;
      this.ongkirPerKm = 2000;
    }

    hitungTotalBiaya() {
        let totalFoodPrice = this.cart.reduce((total, item) => total + (item.price * item.qty), 0);
        let totalOngkir = this.restaurant.jarak * this.ongkirPerKm;
        return totalFoodPrice + totalOngkir;
      }
    
      addFood(food) {
        const existingFoodIndex = this.cart.findIndex(item => item.name === food.name);
        if (existingFoodIndex !== -1) {
          this.cart[existingFoodIndex].qty += food.qty;
        } else {
          this.cart.push(food);
        }
      }
    
      removeFood(foodName) {
        this.cart = this.cart.filter(item => item.name !== foodName);
      }
    
      editFoodQty(foodName, newQty) {
        const foodToEdit = this.cart.find(item => item.name === foodName);
        if (foodToEdit) {
          foodToEdit.qty = newQty;
        }
      }
  }
  
  // Contoh penggunaan program dengan menyediakan parameter restaurant
  const restaurantInfo = { name: "Kwetiaw 99", jarak: 5 };
  const gofood = new GoFood(restaurantInfo);
  
  const food1 = { name: "capcay", price: 50000, qty: 2 };
  gofood.addFood(food1);
  
  const food2 = { name: "mie goreng", price: 45000, qty: 1 };
  gofood.addFood(food2);
  
  const food3 = { name: "capcay", price: 50000, qty: 3 };
  gofood.addFood(food3);
  
  gofood.removeFood("mie goreng");
  
  gofood.editFoodQty("capcay", 5);
  
  const totalBiaya = gofood.hitungTotalBiaya();
  console.log("Total Biaya:", totalBiaya);
  


// nomor 2 => buat lah 5 function dengan parameter tinggi untuk menciptakan segitia bintang dengan menggunakan looping

// expected output :
// *
// **
// ***
// ****

//  ****
//   ***
//    **
//     *

//     *
//    **
//   ***
//  ****

//  ****
//  ***
//  **
//  *

//      *
//     * *
//    * * *
//   * * * *

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
  