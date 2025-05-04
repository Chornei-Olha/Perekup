"use client";

// import { useState, useEffect } from "react";
import SearchLanding from "@/app/components/SearchLanding";
import Slider from "@/app/components/Slider";
// import CarList from "@/app/components/CarList";
// import axios from "axios";

// interface Filters {
//   region: number | "";
//   brand: number | "";
//   model: number | "";
//   minPrice: number;
//   maxPrice: number;
//   minYear: number;
//   maxYear: number;
//   minEngineVolume: number;
//   maxEngineVolume: number;
//   minMileage: number;
//   maxMileage: number;
//   gearbox: number | "";
//   fuel: number | "";
//   state: number | "";
//   paint: boolean;
//   transfer: boolean;
//   sold: boolean;
//   includeDealers: boolean;
//   includeBanned: boolean;
//   marketPriceDeviation: number;
//   period: number;
// }

export default function Search() {
  return (
    <div className="flex flex-col">
      {/* Форма для поиска */}
      <SearchLanding />

      {/* Слайдер топовых машин */}
      <Slider />
      {/* 
      <div className="mt-6 px-4">
        {loading ? (
          <p className="text-center text-gray-600">Загрузка...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <CarList cars={cars} />
        )}
      </div> */}
    </div>
  );
}
