// import CustomFilter from "@/components/CustomFilter";
import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";
import Hero from "@/sections/Hero";
import { fetchCars } from "@/utils/fetchCars";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <section className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            {/* <CustomFilter title='fuel'/>
            <CustomFilter title='year'/> */}
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard
                  key={car.id || `${car.make}-${car.model}-${index}`}
                  car={car}
                />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </section>
    </main>
  );
}
