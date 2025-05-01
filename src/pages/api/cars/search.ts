import type { NextApiRequest, NextApiResponse } from "next";

const cars = [
  {
    id: 510,
    brandId: 1,
    modelId: 10,
    title: "CHEVROLET Express",
    year: 2014,
    price: 33500,
    marketPrice: 36000,
    mileage: 120000,
    engineVolume: 5.3,
    gearbox: 1,
    fuel: "пропан-бутанБензин",
    state: 2,
    paint: false,
    transfer: true,
    sold: false,
    includeDealers: false,
    includeBanned: false,
    city: "Київ",
    daysInSale: 30,
    sellerCarCount: 12,
    description: "Авто привезено з Південної Кореї...",
    url: "https://auto.ria.com/uk/auto_chevrolet_express_37048685.html",
    image:
      "https://cdn2.riastatic.com/auto/photo/chevrolet_express__564063012f.jpg",
    lastUpdate: "30.04.2025",
  },
  // Добавь больше машин с корректными brandId и modelId
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const {
    brand,
    model,
    region,
    minPrice,
    maxPrice,
    marketPriceDeviation,
    minYear,
    maxYear,
    minEngineVolume,
    maxEngineVolume,
    minMileage,
    maxMileage,
    gearbox,
    fuel,
    state,
    paint,
    transfer,
    sold,
    includeDealers,
    includeBanned,
    period,
  } = req.body;

  const filteredCars = cars.filter((car) => {
    const isMatch = true;

    if (brand && car.brandId !== brand) return false;
    if (model && car.modelId !== model) return false;
    if (region && car.city !== region) return false;

    if (minPrice !== undefined && car.price < minPrice) return false;
    if (maxPrice !== undefined && car.price > maxPrice) return false;

    if (marketPriceDeviation !== undefined) {
      const deviation = ((car.price - car.marketPrice) / car.marketPrice) * 100;
      if (Math.abs(deviation) > marketPriceDeviation) return false;
    }

    if (minYear !== undefined && car.year < minYear) return false;
    if (maxYear !== undefined && car.year > maxYear) return false;

    if (minEngineVolume !== undefined && car.engineVolume < minEngineVolume)
      return false;
    if (maxEngineVolume !== undefined && car.engineVolume > maxEngineVolume)
      return false;

    if (minMileage !== undefined && car.mileage < minMileage) return false;
    if (maxMileage !== undefined && car.mileage > maxMileage) return false;

    if (gearbox !== "" && car.gearbox !== gearbox) return false;
    if (fuel && !car.fuel.includes(fuel)) return false;

    if (state !== "" && car.state !== state) return false;

    if (paint !== undefined && car.paint !== paint) return false;
    if (transfer !== undefined && car.transfer !== transfer) return false;
    if (sold !== undefined && car.sold !== sold) return false;

    if (includeDealers !== undefined && car.includeDealers !== includeDealers)
      return false;
    if (includeBanned !== undefined && car.includeBanned !== includeBanned)
      return false;

    if (period !== undefined) {
      const hoursInSale = car.daysInSale * 24;
      if (hoursInSale > period) return false;
    }

    return isMatch;
  });

  res.status(200).json(filteredCars);
}
