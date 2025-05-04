import { NextRequest, NextResponse } from "next/server";

interface Filters {
  region?: string;
  brands?: string[];
  models?: string[];
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  minEngineVolume?: number;
  maxEngineVolume?: number;
  gearbox?: string;
  fuel?: string;
  minMileage?: number;
  maxMileage?: number;
}

const fakeCars = [
  {
    id: 1,
    brand: "Opel",
    model: "Astra",
    year: 2015,
    price: 7500,
    marketPrice: 8200,
    mileage: 150000,
    engineVolume: 1.6,
    gearbox: "Механіка",
    fuel: "Бензин",
    region: "Київська",
    city: "Київ",
    daysInSale: 10,
    sellerCarCount: 2,
    description: "Хороший стан, не бита, не фарбована.",
    url: "https://example.com/car/1",
    image: "https://via.placeholder.com/500x300",
    lastUpdate: "2025-05-01T12:00:00Z",
  },
  {
    id: 2,
    brand: "Honda",
    model: "CR-V",
    year: 2018,
    price: 27000,
    marketPrice: 28000,
    mileage: 80000,
    engineVolume: 3.0,
    gearbox: "Автомат",
    fuel: "Дизель",
    region: "Полтавська",
    city: "Полтава",
    daysInSale: 20,
    sellerCarCount: 1,
    description: "Відмінний стан, сервісна історія.",
    url: "https://example.com/car/2",
    image: "https://via.placeholder.com/500x300",
    lastUpdate: "2025-05-01T12:00:00Z",
  },
  {
    id: 3,
    brand: "Mazda",
    model: "3",
    year: 2020,
    price: 30000,
    marketPrice: 32000,
    mileage: 80000,
    engineVolume: 3.0,
    gearbox: "Механіка",
    fuel: "Дизель",
    region: "Харківська",
    city: "Харків",
    daysInSale: 20,
    sellerCarCount: 1,
    description: "Відмінний стан, сервісна історія.",
    url: "https://example.com/car/2",
    image: "https://via.placeholder.com/500x300",
    lastUpdate: "2025-03-01T12:00:00Z",
  },
];

const regionMap: Record<string, string> = {
  "10": "Київська",
  "11": "Харківська",
  "15": "Полтавська",
};
const brandMap: Record<string, string> = {
  "210": "Opel",
  "212": "Mazda",
  "240": "Honda",
};
const modelMap: Record<string, string> = {
  "33": "Astra",
  "34": "Mokka",
  "35": "Zafira",
  "36": "CX-5",
  "37": "3",
  "38": "CR-V",
};

const gearboxMap: Record<string, string> = { "1": "Механіка", "2": "Автомат" };

const fuelMap: Record<string, string> = {
  "1": "Бензин",
  "2": "Дизель",
  "3": "Газ",
  "4": "Електро",
  "5": "Гібрид",
};

const filterCars = (filters: Filters) => {
  return fakeCars.filter((car) => {
    if (filters.region && car.region !== regionMap[filters.region])
      return false;
    if (
      filters.brands &&
      !filters.brands.map((id) => brandMap[id] || "").includes(car.brand)
    )
      return false;
    if (
      filters.models &&
      !filters.models.map((id) => modelMap[id] || "").includes(car.model)
    )
      return false;

    if (filters.minPrice !== undefined && car.price < Number(filters.minPrice))
      return false;
    if (filters.maxPrice !== undefined && car.price > Number(filters.maxPrice))
      return false;
    if (filters.minYear && car.year < filters.minYear) return false;
    if (filters.maxYear && car.year > filters.maxYear) return false;
    if (filters.minEngineVolume && car.engineVolume < filters.minEngineVolume)
      return false;
    if (filters.maxEngineVolume && car.engineVolume > filters.maxEngineVolume)
      return false;
    if (filters.gearbox && car.gearbox !== gearboxMap[filters.gearbox])
      return false;
    if (filters.fuel && car.fuel !== fuelMap[filters.fuel]) return false;
    if (filters.minMileage && car.mileage < filters.minMileage) return false;
    if (filters.maxMileage && car.mileage > filters.maxMileage) return false;
    return true;
  });
};

// Обработчик POST-запросов
export async function POST(req: NextRequest) {
  try {
    const filters: Filters = await req.json(); // Получаем фильтры из запроса
    console.log("Полученные фильтры:", filters); // Логируем фильтры
    const filteredCars = filterCars(filters); // Применяем фильтры
    console.log("Отфильтрованные машины:", filteredCars); // Логируем отфильтрованные данные
    return NextResponse.json(filteredCars); // Возвращаем отфильтрованные автомобили
  } catch (error) {
    console.error("Ошибка при фильтрации автомобилей:", error);
    return NextResponse.json(
      { error: "Ошибка при фильтрации автомобилей." },
      { status: 500 }
    );
  }
}
