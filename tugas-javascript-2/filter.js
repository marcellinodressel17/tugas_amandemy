var reports = [
  {
    name: "Farhan",
    score: 75,
  },
  {
    name: "Akbar",
    score: 80,
  },
  {
    name: "Hanif",
    score: 60,
  },
  {
    name: "Rudi",
    score: 40,
  },
  {
    name: "Ajam",
    score: 70,
  },
  {
    name: "Hafiz",
    score: 30,
  },
  {
    name: "Adin",
    score: 90,
  },
  {
    name: "Daffa",
    score: 25,
  },
  {
    name: "Ridho",
    score: 55,
  },
  {
    name: "Faris",
    score: 70,
  },
];

var lulus = reports.filter(function (siswa) {
  return siswa.score >= 70;
});

console.log("Siswa yang lulus:");
lulus.forEach(function (siswa) {
  console.log(siswa.name + " - " + siswa.score);
});
