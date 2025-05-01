"use client";

import { useState, useEffect } from "react";
import SearchLanding from "@/app/components/SearchLanding";
import Slider from "@/app/components/Slider";
import CarList from "@/app/components/CarList"; // Подключаем новый компонент CarList
import axios from "axios";

// Типы
interface Filters {
  region: number | "";
  brand: number | "";
  model: number | "";
  minPrice: number;
  maxPrice: number;
  minYear: number;
  maxYear: number;
  minEngineVolume: number;
  maxEngineVolume: number;
  minMileage: number;
  maxMileage: number;
  gearbox: number | "";
  fuel: number | "";
  state: number | "";
  paint: boolean;
  transfer: boolean;
  sold: boolean;
  includeDealers: boolean;
  includeBanned: boolean;
  marketPriceDeviation: number;
  period: number;
}

export default function Search() {
  const [cars, setCars] = useState([]); // Состояние для хранения списка машин
  const [loading, setLoading] = useState(false); // Состояние для отображения загрузки
  const [error, setError] = useState(""); // Состояние для отображения ошибки при загрузке

  // Функция для загрузки данных
  const fetchCars = async (filters: Filters) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/search", filters);
      setCars(response.data || []); // Если данные есть, обновляем список машин
    } catch (err) {
      console.error(err); // Log the error for debugging purposes
      setError("Произошла ошибка при загрузке данных.");
    } finally {
      setLoading(false);
    }
  };

  // Это пример использования данных фильтров. Обычно фильтры можно передать через форму.
  useEffect(() => {
    const filters: Filters = {
      region: "",
      brand: "",
      model: "",
      minPrice: 1000,
      maxPrice: 100000,
      minYear: 2010,
      maxYear: 2025,
      minEngineVolume: 0,
      maxEngineVolume: 6.5,
      minMileage: 100,
      maxMileage: 1000000,
      gearbox: "",
      fuel: "",
      state: "",
      paint: false,
      transfer: false,
      sold: false,
      includeDealers: false,
      includeBanned: false,
      marketPriceDeviation: 0,
      period: 72,
    }; // Здесь ты можешь добавить логику для передачи фильтров
    fetchCars(filters); // Загружаем данные при монтировании компонента
  }, []);

  return (
    <div className="flex flex-col">
      {/* Форма для поиска */}
      <SearchLanding />

      {/* Слайдер топовых машин */}
      <Slider />

      {/* Раздел с результатами поиска */}
      <div className="mt-6 px-4">
        {loading ? (
          <div>Загрузка...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <CarList cars={cars} /> // Используем CarList вместо CarsGrid
        )}
      </div>
    </div>
  );
}
