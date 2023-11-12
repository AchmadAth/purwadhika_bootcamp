// Class BioData
class BioData {
    constructor(nama, tanggalLahir, alamat, mobile, email) {
      this.nama = nama;
      this.tanggalLahir = tanggalLahir;
      this.alamat = alamat;
      this.mobile = mobile;
      this.email = email;
    }
  
    say() {
      return `Halo, nama saya ${this.nama}, umur saya ${this.hitungUmur()} tahun, alamat saya di ${this.alamat}`;
    }
  
    hitungUmur() {
      // Implementasi perhitungan umur (misalnya dengan menghitung selisih tahun dari tanggal lahir dengan tahun sekarang)
      // ...
  
      return 30; // Contoh umur statis
    }
  }
  
  // Class Dokter (inheritance dari BioData)
  class Dokter extends BioData {
    constructor(nama, tanggalLahir, alamat, mobile, email, alamatRumahSakit, profesi, pengalamanBekerja) {
      super(nama, tanggalLahir, alamat, mobile, email);
      this.alamatRumahSakit = alamatRumahSakit;
      this.profesi = profesi;
      this.pengalamanBekerja = pengalamanBekerja;
    }
  
    say() {
      return `Halo, nama saya ${this.nama}, saya berprofesi sebagai dokter dan beroperasi di ${this.alamatRumahSakit}`;
    }
  }
  
  // Class Ojol (inheritance dari BioData)
  class Ojol extends BioData {
    constructor(nama, tanggalLahir, alamat, mobile, email, kendaraan, profesi, platNomor) {
      super(nama, tanggalLahir, alamat, mobile, email);
      this.kendaraan = kendaraan;
      this.profesi = profesi;
      this.platNomor = platNomor;
    }
  
    say() {
      return `Halo, nama saya ${this.nama}, saya berprofesi sebagai ojol dan kendaraan saya adalah ${this.kendaraan}`;
    }
  }
  
  // Contoh penggunaan
  const dokterUdin = new Dokter("Udin", "01-01-1990", "BSD", "08123456789", "udin@gmail.com", "RS BSD", "Dokter", 10);
  const ojolUdin = new Ojol("Udin", "01-01-1990", "BSD", "08123456789", "udin@gmail.com", "Nissan R35", "Ojol", "B 1234 CD");
  
  console.log(dokterUdin.say()); // Output: Halo, nama saya Udin, saya berprofesi sebagai dokter dan beroperasi di RS BSD
  console.log(ojolUdin.say());   // Output: Halo, nama saya Udin, saya berprofesi sebagai ojol dan kendaraan saya adalah Nissan R35
  