import { CARS_API_BASE_URL } from "@/constants/urls";
import { FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, fuel } = filters;
  
  const headers = {
    "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPID_API_HOST || "",
  };

  const response = await fetch(
    `${CARS_API_BASE_URL}?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
