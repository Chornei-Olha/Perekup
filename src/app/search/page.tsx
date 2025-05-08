"use client";

import { useState } from "react";
import { searchCars } from "@/lib/api";
import CarResults from "@/app/components/CarResults";
import CarSearchForm from "@/app/components/CarSearchForm";
import Top50Slider from "../components/Slider";
import { Car, CarSearchFilters } from "@/lib/types";
import Header from "../components/Header";

export default function HomePage() {
  const [results, setResults] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (filters: CarSearchFilters) => {
    setLoading(true);
    const cars = await searchCars(filters);
    setResults(cars);
    setLoading(false);
  };

  // useEffect(() => {
  //   const loginDate = localStorage.getItem("loginDate");
  //   const paid = localStorage.getItem("paid");

  //   const diff = Date.now() - (loginDate ? Number(loginDate) : 0);
  //   if (!loginDate || (diff > 86400000 && paid !== "true")) {
  //     router.push("/login"); // ✅ редирект, если доступ просрочен
  //   }
  // }, [router]);

  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 1), rgba(109, 1, 21, 1)), url(/images/bg.png)",
      }}
    >
      {" "}
      <Header />
      <CarSearchForm onSubmit={handleSearch} />
      <Top50Slider />
      {loading ? <p>Завантаження...</p> : <CarResults results={results} />}
    </section>
  );
}
