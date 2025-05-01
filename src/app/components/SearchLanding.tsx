"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

// Типы
interface Option {
  id: number;
  name: string;
}

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

export default function SearchLanding() {
  const [regions, setRegions] = useState<Option[]>([]);
  const [brands, setBrands] = useState<Option[]>([]);
  const [models, setModels] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState<Filters>({
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
  });

  useEffect(() => {
    axios.get("/api/regions").then((res) => setRegions(res.data));
    axios.get("/api/brands").then((res) => setBrands(res.data));
  }, []);

  const handleBrandChange = (brandId: number | "") => {
    setFilters({ ...filters, brand: brandId, model: "" });

    if (brandId) {
      axios
        .post("/api/models", { brands: [brandId] })
        .then((res) => setModels(res.data));
    } else {
      setModels([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (filters.minPrice > filters.maxPrice) {
      setError("Минимальная цена не может быть больше максимальной!");
      setLoading(false);
      return;
    }

    if (filters.minYear > filters.maxYear) {
      setError("Год от не может быть больше года до!");
      setLoading(false);
      return;
    }

    axios
      .post("/api/search", filters)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setError("Произошла ошибка при загрузке данных.");
        setLoading(false);
      });
  };

  return (
    <section className="bg-gradient-to-b from-black to-red-900 text-black p-4 sm:p-6 md:p-10">
      <div className="max-w-7xl mx-auto rounded-3xl bg-white p-6 md:p-10 space-y-6 shadow-xl">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm"
        >
          {/* Регион */}
          <select
            className="border p-2 rounded"
            value={filters.region}
            onChange={(e) =>
              setFilters({ ...filters, region: Number(e.target.value) || "" })
            }
          >
            <option value="">Все регионы</option>
            {regions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.name}
              </option>
            ))}
          </select>

          {/* Бренд */}
          <select
            className="border p-2 rounded"
            value={filters.brand}
            onChange={(e) => handleBrandChange(Number(e.target.value) || "")}
          >
            <option value="">Выберите бренд</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>

          {/* Модель */}
          <select
            className="border p-2 rounded"
            value={filters.model}
            onChange={(e) =>
              setFilters({ ...filters, model: Number(e.target.value) || "" })
            }
            disabled={!filters.brand}
          >
            <option value="">Выберите модель</option>
            {models.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>

          {/* КПП */}
          <input
            type="number"
            placeholder="КПП (1 или 2)"
            className="border p-2 rounded"
            value={filters.gearbox}
            onChange={(e) =>
              setFilters({ ...filters, gearbox: Number(e.target.value) || "" })
            }
          />

          {/* Топливо */}
          <input
            type="number"
            placeholder="Топливо (1–5)"
            className="border p-2 rounded"
            value={filters.fuel}
            onChange={(e) =>
              setFilters({ ...filters, fuel: Number(e.target.value) || "" })
            }
          />

          {/* Год */}
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Год от"
              className="border p-2 rounded w-1/2"
              value={filters.minYear}
              onChange={(e) =>
                setFilters({ ...filters, minYear: Number(e.target.value) })
              }
            />
            <input
              type="number"
              placeholder="до"
              className="border p-2 rounded w-1/2"
              value={filters.maxYear}
              onChange={(e) =>
                setFilters({ ...filters, maxYear: Number(e.target.value) })
              }
            />
          </div>

          {/* Пробег */}
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Пробег от"
              className="border p-2 rounded w-full"
              value={filters.minMileage}
              onChange={(e) =>
                setFilters({ ...filters, minMileage: Number(e.target.value) })
              }
            />
            <input
              type="number"
              placeholder="до"
              className="border p-2 rounded w-full"
              value={filters.maxMileage}
              onChange={(e) =>
                setFilters({ ...filters, maxMileage: Number(e.target.value) })
              }
            />
          </div>

          {/* Объем двигателя */}
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Объем от"
              className="border p-2 rounded w-full"
              value={filters.minEngineVolume}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  minEngineVolume: Number(e.target.value),
                })
              }
            />
            <input
              type="number"
              placeholder="до"
              className="border p-2 rounded w-full"
              value={filters.maxEngineVolume}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  maxEngineVolume: Number(e.target.value),
                })
              }
            />
          </div>

          {/* Цена */}
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Цена от"
              className="border p-2 rounded w-full"
              value={filters.minPrice}
              onChange={(e) =>
                setFilters({ ...filters, minPrice: Number(e.target.value) })
              }
            />
            <input
              type="number"
              placeholder="до"
              className="border p-2 rounded w-full"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: Number(e.target.value) })
              }
            />
          </div>

          {/* Состояние */}
          <input
            type="number"
            placeholder="Состояние (1–3)"
            className="border p-2 rounded"
            value={filters.state}
            onChange={(e) =>
              setFilters({ ...filters, state: Number(e.target.value) || "" })
            }
          />

          {/* Чекбоксы */}
          <div className="flex flex-wrap gap-4 col-span-3">
            {[
              ["paint", "Крашено"],
              ["transfer", "Пригнано"],
              ["sold", "Продано"],
              ["includeDealers", "Включить дилеров"],
              ["includeBanned", "Включить забаненные"],
            ].map(([key, label]) => (
              <label key={key}>
                <input
                  type="checkbox"
                  checked={filters[key as keyof Filters] as boolean}
                  onChange={() =>
                    setFilters({
                      ...filters,
                      [key]: !filters[key as keyof Filters],
                    })
                  }
                />
                &nbsp;{label}
              </label>
            ))}
          </div>

          {/* Отклонение от рыночной цены */}
          <div className="col-span-3">
            <label>Отклонение от рыночной цены, %</label>
            <input
              type="number"
              className="border p-2 rounded w-24"
              value={filters.marketPriceDeviation}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  marketPriceDeviation: Number(e.target.value),
                })
              }
            />
          </div>

          {/* Период */}
          <div className="col-span-3">
            <label>Период (в часах)</label>
            <input
              type="number"
              className="border p-2 rounded w-full"
              value={filters.period}
              onChange={(e) =>
                setFilters({ ...filters, period: Number(e.target.value) })
              }
            />
          </div>

          <div className="col-span-3 flex justify-end">
            <button
              type="submit"
              className="bg-[#9f1b1b] text-white px-6 py-3 rounded-xl hover:bg-red-800 transition"
            >
              Подобрать авто
            </button>
          </div>
        </form>

        {loading && <p>Загрузка...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </section>
  );
}

// export default function SearchLanding() {
//   return (
//     <section className="min-h-screen bg-gradient-to-b from-black to-red-900 text-black p-4 sm:p-6 md:p-10">
//       <div className="max-w-7xl mx-auto rounded-3xl bg-white p-6 md:p-10 space-y-6 shadow-xl">
//         {/* Top Buttons */}
//         <div className="flex flex-wrap justify-end gap-2">
//           <button className="bg-[#9f1b1b] text-white text-sm px-4 py-2 rounded-full">
//             Задать фильтры для уведомлений
//           </button>
//           <button className="bg-[#9f1b1b] text-white text-sm px-4 py-2 rounded-full">
//             Сменить пароль
//           </button>
//           <button className="bg-[#9f1b1b] text-white text-sm px-4 py-2 rounded-full">
//             Купить Премиум
//           </button>
//           <button className="bg-[#9f1b1b] text-white text-sm px-4 py-2 rounded-full">
//             Выход
//           </button>
//         </div>

//         {/* Remaining Time and Email */}
//         <div className="flex justify-between text-sm font-semibold">
//           <span className="text-[#9f1b1b]">
//             У вас осталось 1 дней использования
//           </span>
//           <span>b45893456@gmail.com</span>
//         </div>

//         {/* Filters */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
//           <input
//             className="border p-2 rounded"
//             placeholder="Выбраны все марки"
//           />
//           <input
//             className="border p-2 rounded"
//             placeholder="Выбраны все модели"
//           />
//           <input className="border p-2 rounded" placeholder="Вся Украина" />

//           <input className="border p-2 rounded" placeholder="КПП Любой" />
//           <input className="border p-2 rounded" placeholder="Топливо Любой" />
//           <div className="flex gap-2">
//             <input
//               className="border p-2 rounded w-1/2"
//               placeholder="Год от"
//               defaultValue="2010"
//             />
//             <input
//               className="border p-2 rounded w-1/2"
//               placeholder="до"
//               defaultValue="2025"
//             />
//           </div>

//           <div className="flex items-center gap-2 col-span-3">
//             <input type="checkbox" id="dealers" className="accent-[#9f1b1b]" />
//             <label htmlFor="dealers">отобразить без диллеров</label>
//             <input
//               type="checkbox"
//               id="blocked"
//               defaultChecked
//               className="accent-[#9f1b1b]"
//             />
//             <label htmlFor="blocked">исключить заблокирован.</label>
//             <button className="border p-1 rounded">
//               Показать с проданными
//             </button>
//           </div>

//           <div className="flex gap-2 col-span-3">
//             <input
//               className="border p-2 rounded w-full"
//               placeholder="Состояние Целые"
//             />
//             <button className="border p-1 rounded">
//               Показать с крашенными
//             </button>
//             <button className="border p-1 rounded">
//               Показать с пригнанными
//             </button>
//             <span className="text-lg font-bold">?</span>
//           </div>

//           <div className="flex gap-2 items-center">
//             <label>Цена</label>
//             <input className="border p-2 rounded w-full" defaultValue="1000" />
//             <span>-</span>
//             <input
//               className="border p-2 rounded w-full"
//               defaultValue="100000"
//             />
//             <span>$</span>
//           </div>

//           <div className="flex gap-2 items-center">
//             <label>Объем</label>
//             <input className="border p-2 rounded w-full" defaultValue="0" />
//             <span>-</span>
//             <input className="border p-2 rounded w-full" defaultValue="6.5" />
//             <span>см3</span>
//           </div>

//           <div className="flex gap-2 items-center">
//             <label>Пробег</label>
//             <input className="border p-2 rounded w-full" defaultValue="100" />
//             <span>-</span>
//             <input
//               className="border p-2 rounded w-full"
//               defaultValue="1000000"
//             />
//             <span>км</span>
//           </div>

//           <div className="flex items-center col-span-3">
//             <label className="mr-2">Отклонение от рыночной цены</label>
//             <input
//               type="number"
//               className="border p-2 rounded w-24"
//               defaultValue="0"
//             />
//           </div>

//           <div className="col-span-3">
//             <label>
//               Период <span className="text-[#9f1b1b]">3 дня</span>
//             </label>
//             <input className="border p-2 rounded w-full mt-1" />
//           </div>

//           <div className="col-span-3 flex justify-end">
//             <button className="bg-[#9f1b1b] text-white px-6 py-3 rounded-xl">
//               Подобрать авто
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Table Head Placeholder */}
//       <div className="max-w-7xl mx-auto mt-6 bg-white rounded-2xl p-4 grid grid-cols-6 text-xs text-center text-[#9f1b1b] font-semibold">
//         <span>Фото</span>
//         <span>Характеристики</span>
//         <span>t от рын.цены</span>
//         <span>
//           Кол.объяв автора
//           <br />
//           (за 2 года)
//         </span>
//         <span>
//           Обновленно
//           <br />
//           Сайт
//         </span>
//         <span>Описание</span>
//       </div>
//     </section>
//   );
// }
