"use client";
import React from "react";
import Image from "next/image"; // Import Image from next/image
import type { Car } from "@/app/types/Car";

interface CarListProps {
  cars: Car[];
}

const CarList: React.FC<CarListProps> = ({ cars }) => {
  if (cars.length === 0) {
    return <p className="text-center text-gray-600">Нічого не знайдено</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {cars.map((car) => (
        <div
          key={car.id}
          className="border rounded-2xl overflow-hidden shadow hover:shadow-lg transition bg-white"
        >
          <Image
            src={car.image}
            alt={car.brand}
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-bold">
              {car.brand} {car.model}
            </h3>
            <p className="text-sm text-gray-600">
              {car.year} • {car.engineVolume} л • {car.gearbox} • {car.fuel}
            </p>
            <p className="text-md font-semibold text-[#9f1b1b]">
              {car.price.toLocaleString()} ${" "}
              <span className="text-sm text-gray-500 line-through">
                ({car.marketPrice.toLocaleString()} $)
              </span>
            </p>
            <p className="text-sm text-gray-700">
              {car.mileage.toLocaleString()} км • {car.region}
            </p>
            <p className="text-sm text-gray-500">
              В продажу: {car.daysInSale} днів • Продавець має:{" "}
              {car.sellerCarCount} авто
            </p>
            <p className="text-sm text-gray-600 line-clamp-3">
              {car.description}
            </p>
            <a
              href={car.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-2 bg-[#9f1b1b] text-white py-2 rounded-xl hover:bg-red-800 transition"
            >
              Переглянути
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
