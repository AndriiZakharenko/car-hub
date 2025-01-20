import CarCatalog from "@/sections/CarCatalog";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <CarCatalog/>
    </main>
  );
}
