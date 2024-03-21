function hitungLuasPermukaanBalok(panjang, lebar, tinggi) {
  var luas = 2 * (panjang * tinggi + panjang * lebar + lebar * tinggi);
  return luas;
}

// Memanggil fungsi dan menampilkan hasilnya di terminal
var panjangBalok = 5;
var lebarBalok = 3;
var tinggiBalok = 4;

var luasPermukaan = hitungLuasPermukaanBalok(panjangBalok, lebarBalok, tinggiBalok);
console.log("Luas Permukaan Balok: " + luasPermukaan);
