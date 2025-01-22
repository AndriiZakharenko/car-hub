import { IMAGIN_API_BASE_URL } from "@/constants/urls";
import { CarProps } from "@/types";

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL(IMAGIN_API_BASE_URL);
  const { make, model, year } = car;

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
  );
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
