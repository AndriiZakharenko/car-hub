import { CARS_API_BASE_URL } from "@/constants/urls";

export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPID_API_HOST || "",
  };

  const response = await fetch(`${CARS_API_BASE_URL}?model=corolla`, {
    headers: headers,
  });

  const result = await response.json();

  return result;
}
