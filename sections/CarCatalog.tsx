import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";

const CarCatalog = () => {
  return (
    <section className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore out cars you might like</p>
      </div>

      <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter />
          <CustomFilter />
        </div>
      </div>
    </section>
  );
};

export default CarCatalog;
