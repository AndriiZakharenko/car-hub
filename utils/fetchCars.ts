export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "32f92f7e8dmsh30a1d9516c33329p1f8ebajsn2c7168d840af",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
