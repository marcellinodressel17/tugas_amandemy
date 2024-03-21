function exercisePromise(age) {
  return new Promise(function (resolve, reject) {
    if (age > 18) {
      resolve("Kamu sudah dewasa");
    } else {
      reject("Kamu Masih Kecil");
    }
  });
}

exercisePromise(20)
  .then((result) => {
    console.log(result); // "Kamu sudah dewasa"
  })
  .catch((error) => {
    console.error(error); // "Kamu Masih Kecil"
  });
