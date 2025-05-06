// "use client";

// import { useState, useEffect } from "react";
// import { getBrands, getModels, getRegions } from "@/lib/api";
// import { Car, Filters } from "@/lib/types";
// import CarList from "@/app/components/CarResults";
// import Header from "./Header";

// interface Model {
//   id: number;
//   name: string;
//   brandId: number;
// }

// interface Brand {
//   id: number;
//   name: string;
// }

// interface Region {
//   id: number;
//   name: string;
// }

// export default function SearchLanding() {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [regions, setRegions] = useState<Region[]>([]);
//   const [brands, setBrands] = useState<Brand[]>([]);
//   const [models, setModels] = useState<Model[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const [filters, setFilters] = useState<Filters>({
//     region: null,
//     brand: null,
//     model: null,
//     minPrice: 1000,
//     maxPrice: 100000,
//     minYear: 2010,
//     maxYear: 2025,
//     minEngineVolume: 0,
//     maxEngineVolume: 6.5,
//     minMileage: 100,
//     maxMileage: 1000000,
//     gearbox: null,
//     fuel: null,
//     state: null,
//     paint: false,
//     transfer: false,
//     sold: false,
//     includeDealers: false,
//     includeBanned: false,
//     marketPriceDeviation: 0,
//     period: 72,
//   });

//   useEffect(() => {
//     const loadInitialData = async () => {
//       try {
//         const [regionsData, brandsData] = await Promise.all([
//           getRegions(),
//           getBrands(),
//         ]);
//         setRegions(regionsData);
//         setBrands(brandsData);
//       } catch (error) {
//         console.error("Ошибка при загрузке данных", error);
//         setError("Ошибка при загрузке данных.");
//       }
//     };

//     loadInitialData();
//   }, []);

//   const handleBrandChange = (brandId: number | null) => {
//     setFilters((prev) => ({ ...prev, brand: brandId, model: null }));

//     if (brandId) {
//       getModels([brandId])
//         .then((modelsData) => {
//           setModels(modelsData);
//         })
//         .catch((error) => {
//           console.error("Ошибка при загрузке моделей", error);
//           setError("Ошибка при загрузке моделей.");
//         });
//     } else {
//       setModels([]);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     if (filters.minPrice > filters.maxPrice) {
//       setError("Минимальная цена не может быть больше максимальной!");
//       setLoading(false);
//       return;
//     }

//     if (filters.minYear > filters.maxYear) {
//       setError("Год от не может быть больше года до!");
//       setLoading(false);
//       return;
//     }

//     const payload = {
//       ...filters,
//       ...(filters.brand !== null ? { brands: [filters.brand] } : {}),
//       ...(filters.model !== null ? { models: [filters.model] } : {}),
//     };

//     const cleanedPayload = Object.fromEntries(
//       Object.entries(payload).filter(([, value]) => value !== null)
//     );

//     if (Object.keys(cleanedPayload).length === 0) {
//       setError("Пожалуйста, выберите хотя бы один фильтр.");
//       setLoading(false);
//       return;
//     }

//     fetch("/api/cars/search", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(cleanedPayload),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setCars(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Произошла ошибка при загрузке данных.");
//         setLoading(false);
//       });
//   };

//   return (
//     <section className="bg-gradient-to-b from-black to-red-900 text-black  py-10 px-20">
//       <Header />
//       <div className="max-w-7xl mx-auto rounded-[20px] bg-white space-y-6 shadow-xl mt-10 p-10 sm:p-6 md:p-20">
//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm"
//         >
//           <select
//             className="border p-2 rounded"
//             value={filters.region ?? ""}
//             onChange={(e) =>
//               setFilters({
//                 ...filters,
//                 region: e.target.value ? Number(e.target.value) : null,
//               })
//             }
//           >
//             <option value="">Все регионы</option>
//             {regions.map((region) => (
//               <option key={region.id} value={region.id}>
//                 {region.name}
//               </option>
//             ))}
//           </select>

//           <select
//             className="border p-2 rounded"
//             value={filters.brand ?? ""}
//             onChange={(e) => handleBrandChange(Number(e.target.value) || null)}
//           >
//             <option value="">Выберите бренд</option>
//             {brands.map((brand) => (
//               <option key={brand.id} value={brand.id}>
//                 {brand.name}
//               </option>
//             ))}
//           </select>

//           <select
//             className="border p-2 rounded"
//             value={filters.model ?? ""}
//             onChange={(e) =>
//               setFilters({
//                 ...filters,
//                 model: e.target.value ? Number(e.target.value) : null,
//               })
//             }
//             disabled={!filters.brand}
//           >
//             <option value="">Выберите модель</option>
//             {models
//               .filter(
//                 (model) => !filters.brand || model.brandId === filters.brand
//               )
//               .map((model) => (
//                 <option key={model.id} value={model.id}>
//                   {model.name}
//                 </option>
//               ))}
//           </select>

//           <select
//             className="border p-2 rounded"
//             value={filters.gearbox ?? ""}
//             onChange={(e) =>
//               setFilters({
//                 ...filters,
//                 gearbox: e.target.value ? String(e.target.value) : null, // Преобразуем в строку
//               })
//             }
//           >
//             <option value="">КПП (все)</option>
//             <option value="0">Механика</option> {/* Значение как строка */}
//             <option value="1">Автомат</option> {/* Значение как строка */}
//           </select>

//           <select
//             className="border p-2 rounded"
//             value={filters.fuel ?? ""}
//             onChange={(e) =>
//               setFilters({
//                 ...filters,
//                 fuel: e.target.value ? Number(e.target.value) : null,
//               })
//             }
//           >
//             <option value="">Топливо</option>
//             <option value={1}>Бензин</option>
//             <option value={2}>Дизель</option>
//             <option value={3}>Газ</option>
//             <option value={4}>Электро</option>
//             <option value={5}>Гибрид</option>
//           </select>

//           <div className="flex gap-2">
//             <input
//               type="number"
//               placeholder="Год от"
//               className="border p-2 rounded w-1/2"
//               value={filters.minYear}
//               onChange={(e) =>
//                 setFilters({ ...filters, minYear: Number(e.target.value) })
//               }
//             />
//             <input
//               type="number"
//               placeholder="до"
//               className="border p-2 rounded w-1/2"
//               value={filters.maxYear}
//               onChange={(e) =>
//                 setFilters({ ...filters, maxYear: Number(e.target.value) })
//               }
//             />
//           </div>

//           <div className="flex gap-2">
//             <input
//               type="number"
//               placeholder="Пробег от"
//               className="border p-2 rounded w-full"
//               value={filters.minMileage}
//               onChange={(e) =>
//                 setFilters({ ...filters, minMileage: Number(e.target.value) })
//               }
//             />
//             <input
//               type="number"
//               placeholder="до"
//               className="border p-2 rounded w-full"
//               value={filters.maxMileage}
//               onChange={(e) =>
//                 setFilters({ ...filters, maxMileage: Number(e.target.value) })
//               }
//             />
//           </div>

//           <div className="flex gap-2">
//             <input
//               type="number"
//               placeholder="Объем от"
//               className="border p-2 rounded w-full"
//               value={filters.minEngineVolume}
//               onChange={(e) =>
//                 setFilters({
//                   ...filters,
//                   minEngineVolume: Number(e.target.value),
//                 })
//               }
//             />
//             <input
//               type="number"
//               placeholder="до"
//               className="border p-2 rounded w-full"
//               value={filters.maxEngineVolume}
//               onChange={(e) =>
//                 setFilters({
//                   ...filters,
//                   maxEngineVolume: Number(e.target.value),
//                 })
//               }
//             />
//           </div>

//           <div className="flex gap-2">
//             <input
//               type="number"
//               placeholder="Цена от"
//               className="border p-2 rounded w-full"
//               value={filters.minPrice}
//               onChange={(e) =>
//                 setFilters({ ...filters, minPrice: Number(e.target.value) })
//               }
//             />
//             <input
//               type="number"
//               placeholder="до"
//               className="border p-2 rounded w-full"
//               value={filters.maxPrice}
//               onChange={(e) =>
//                 setFilters({ ...filters, maxPrice: Number(e.target.value) })
//               }
//             />
//           </div>

//           <select
//             className="border p-2 rounded"
//             value={filters.state ?? ""}
//             onChange={(e) =>
//               setFilters({
//                 ...filters,
//                 state: e.target.value ? Number(e.target.value) : null,
//               })
//             }
//           >
//             <option value="">Состояние</option>
//             <option value={1}>Новый</option>
//             <option value={2}>Б/У</option>
//           </select>

//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={filters.paint}
//               onChange={() => setFilters({ ...filters, paint: !filters.paint })}
//             />
//             Покрашен
//           </label>

//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={filters.transfer}
//               onChange={() =>
//                 setFilters({ ...filters, transfer: !filters.transfer })
//               }
//             />
//             Передача
//           </label>

//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={filters.sold}
//               onChange={() => setFilters({ ...filters, sold: !filters.sold })}
//             />
//             Продано
//           </label>

//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={filters.includeDealers}
//               onChange={() =>
//                 setFilters({
//                   ...filters,
//                   includeDealers: !filters.includeDealers,
//                 })
//               }
//             />
//             Включая дилеров
//           </label>

//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={filters.includeBanned}
//               onChange={() =>
//                 setFilters({
//                   ...filters,
//                   includeBanned: !filters.includeBanned,
//                 })
//               }
//             />
//             Включая заблокированные
//           </label>

//           <input
//             type="number"
//             placeholder="Отклонение от рыночной цены (%)"
//             className="border p-2 rounded"
//             value={filters.marketPriceDeviation}
//             onChange={(e) =>
//               setFilters({
//                 ...filters,
//                 marketPriceDeviation: Number(e.target.value),
//               })
//             }
//           />

//           <input
//             type="number"
//             placeholder="Период (мес)"
//             className="border p-2 rounded"
//             value={filters.period}
//             onChange={(e) =>
//               setFilters({ ...filters, period: Number(e.target.value) })
//             }
//           />

//           <button
//             type="submit"
//             className="mt-4 p-2 bg-red-600 text-white rounded"
//           >
//             Найти
//           </button>
//         </form>

//         {loading && <p>Загрузка...</p>}
//         {error && <p className="text-red-500">{error}</p>}
//       </div>

//       <div className="mt-8">
//         <CarList cars={Array.isArray(cars) ? cars : []} />

//         {/* <CarList cars={cars} /> */}
//       </div>
//     </section>
//   );
// }

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
