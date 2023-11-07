// buat sebuah class tokopedia
// dimana setiap produk memiliki categori yang berbeda beda
// pada saat belanja bisa add to cart
// terdapat stock di dalam produk
// apabila stock lebih sedikit dari pada request add to cart maka dia akan error
// bisa checkout, pada saat checkout cart akan kosong dan stock akan berkurang
// menu untuk menambahkan produk, edit produk, delete produk

// produk, name, stock, category , warna

// category 2
// pakaian => ukuran, brand
// buku => author,totalPage
class Tokopedia {
    constructor() {
      this.products = [];
      this.cart = [];
    }
  
    // Menambahkan produk ke daftar produk
    addProduct(product) {
      this.products.push(product);
    }
  
    // Mengedit produk berdasarkan nama produk
    editProduct(productName, updatedProduct) {
      const productIndex = this.products.findIndex(product => product.name === productName);
      if (productIndex !== -1) {
        this.products[productIndex] = updatedProduct;
      }
    }
  
    // Menghapus produk berdasarkan nama produk
    deleteProduct(productName) {
      this.products = this.products.filter(product => product.name !== productName);
    }
  
    // Menambahkan produk ke keranjang
    addToCart(productName, quantity) {
      const product = this.products.find(product => product.name === productName);
      if (!product) {
        console.log(`Produk '${productName}' tidak ditemukan.`);
        return;
      }
      if (quantity > product.stock) {
        console.log(`Stok produk '${productName}' tidak mencukupi.`);
        return;
      }
  
      const cartItem = { ...product, quantity };
      this.cart.push(cartItem);
    }
  
    // Checkout, mengurangi stok produk dan mengosongkan keranjang
    checkout() {
      for (const cartItem of this.cart) {
        const product = this.products.find(p => p.name === cartItem.name);
        if (product) {
          product.stock -= cartItem.quantity;
        }
      }
      this.cart = [];
    }
  }
  
  class Product {
    constructor(name, stock, category, color) {
      this.name = name;
      this.stock = stock;
      this.category = category;
      this.color = color;
    }
  }
  
  class Clothing extends Product {
    constructor(name, stock, category, color, size, brand) {
      super(name, stock, category, color);
      this.size = size;
      this.brand = brand;
    }
  }
  
  class Book extends Product {
    constructor(name, stock, category, color, author, totalPage) {
      super(name, stock, category, color);
      this.author = author;
      this.totalPage = totalPage;
    }
  }
  
  // Contoh penggunaan
  const tokopedia = new Tokopedia();
  
  const clothing1 = new Clothing('Kaos Putih', 50, 'Pakaian', 'Putih', 'M', 'Brand A');
  const clothing2 = new Clothing('Celana Jeans', 30, 'Pakaian', 'Biru', 'L', 'Brand B');
  const book1 = new Book('Novel ABC', 20, 'Buku', 'Warna Kertas', 'Penulis X', 300);
  
  tokopedia.addProduct(clothing1);
  tokopedia.addProduct(clothing2);
  tokopedia.addProduct(book1);
  
  tokopedia.addToCart('Kaos Putih', 3);
  tokopedia.addToCart('Celana Jeans', 2);
  
  console.log('Produk:', tokopedia.products);
  console.log('Keranjang Belanja:', tokopedia.cart);
  
  tokopedia.checkout();
  
  console.log('Setelah Checkout - Stok Produk:', tokopedia.products);
  console.log('Setelah Checkout - Keranjang Belanja:', tokopedia.cart);
  