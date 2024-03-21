async function getData() {
  try {
    const response = await fetch("https://api.amandemy.co.id/api/tugas", {
      headers: {
        Accept: "application/json",
      },
    });
    const result = await response.json();

    // Filter data berdasarkan harga >= 15000
    result.forEach((data, index) => {
      if (data.harga >= 15000) {
        console.log(`Data ke-${index + 1}:`, data);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

getData();
