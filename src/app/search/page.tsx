"use client";

import SearchLanding from "@/app/components/SearchLanding";
import Slider from "@/app/components/Slider";

export default function Search() {
  return (
    <div className="flex flex-col">
      <SearchLanding />
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
