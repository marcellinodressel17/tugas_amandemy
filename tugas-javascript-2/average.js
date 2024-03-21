var arr = [52, 10, 34, 98, 75, 84, 102, 73, 86, 95, 42, 52, 68, 94, 43, 87, 123];

var total = 0;

for (var i = 0; i < arr.length; i++) {
  total += arr[i];
}

var rataRata = total / arr.length;

console.log("Rata-rata dari array tersebut adalah: " + rataRata);
