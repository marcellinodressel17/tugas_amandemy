var arr = [100, 8, 29, 10, 35, 28, 1, 5, 8, 28, 70, 83, 20, 95, 10];

arr.sort(function (a, b) {
  return b - a; // Urutkan dari terbesar ke terkecil
});

console.log("Data Nilai (terurut dari terbesar hingga terkecil):");
console.log(arr);
