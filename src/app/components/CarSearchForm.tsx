// "use client";

// import { useEffect, useState } from "react";
// import { CarSearchFilters } from "../../lib/types";
// import {
//   Listbox,
//   ListboxButton,
//   ListboxOption,
//   ListboxOptions,
// } from "@headlessui/react";
// import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

// type Option = { id: number; name: string };

// interface CarSearchFormProps {
//   onSubmit: (filters: CarSearchFilters) => void;
// }

// const CarSearchForm: React.FC<CarSearchFormProps> = ({ onSubmit }) => {
//   const [regions, setRegions] = useState<Option[]>([]);
//   const [brands, setBrands] = useState<Option[]>([]);
//   const [models, setModels] = useState<Option[]>([]);

//   const [selectedBrand, setSelectedBrand] = useState<number>(0); // Одиночный выбор
//   const [selectedModels, setSelectedModels] = useState<number[]>([]);
//   const [selectedGearbox, setSelectedGearbox] = useState<number | null>(null);
//   const [selectedFuel, setSelectedFuel] = useState<number | null>(null);

//   useEffect(() => {
//     fetch("/api/regions")
//       .then((res) => res.json())
//       .then((data) => setRegions(data));

//     fetch("/api/brands")
//       .then((res) => res.json())
//       .then((data) => setBrands([{ id: 0, name: "Все марки" }, ...data]));
//   }, []);

//   useEffect(() => {
//     if (selectedBrand && selectedBrand !== 0) {
//       fetch("/api/models/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ brands: [selectedBrand] }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (Array.isArray(data)) setModels(data);
//           else if (Array.isArray(data.models)) setModels(data.models);
//           else {
//             console.error("Unexpected response format", data);
//             setModels([]);
//           }
//         })
//         .catch((err) => {
//           console.error("Failed to fetch models", err);
//           setModels([]);
//         });
//     } else {
//       setModels([]);
//       setSelectedModels([]); // очищаем при выборе "Все марки"
//     }
//   }, [selectedBrand]);

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();

//     const form = e.target as HTMLFormElement;
//     const formData = new FormData(form);

//     const data: CarSearchFilters = {
//       brands: selectedBrand === 0 ? [] : [selectedBrand],
//       models: selectedModels.length > 0 ? selectedModels : [],
//       region: Number(formData.get("region")) || undefined,
//       minPrice: Number(formData.get("minPrice")) || undefined,
//       maxPrice: Number(formData.get("maxPrice")) || undefined,
//       minYear: Number(formData.get("minYear")),
//       maxYear: Number(formData.get("maxYear")),
//       minEngineVolume: Number(formData.get("minEngine")) || undefined,
//       maxEngineVolume: Number(formData.get("maxEngine")) || undefined,
//       minMileage: Number(formData.get("minMileage")) || undefined,
//       maxMileage: Number(formData.get("maxMileage")) || undefined,
//       gearbox:
//         formData.get("gearbox") !== ""
//           ? Number(formData.get("gearbox"))
//           : undefined,
//       fuel:
//         formData.get("fuel") !== "" ? Number(formData.get("fuel")) : undefined,
//       paint: formData.get("paint") === "on",
//       transfer: formData.get("transfer") === "on",
//       sold: formData.get("sold") === "on",
//       includeDealers: formData.get("includeDealers") === "on",
//       includeBanned: formData.get("includeBanned") === "on",
//       state:
//         formData.get("state") !== ""
//           ? Number(formData.get("state"))
//           : undefined,
//       marketPriceDeviation: Number(formData.get("deviation")) || 0,
//       period: 72,
//     };

//     onSubmit(data);
//   };

//   return (
//     <form onSubmit={handleSearch} className="pt-10 sm:pt-15">
//       <div className="flex flex-col sm:flex-row">
//         {" "}
//         <div className="space-y-4 sm:space-y-8 pt-8 pl-4 pr-4 sm:p-8 w-full sm:w-xl mx-auto">
//           {/* Марка */}
//           <div>
//             <label className="font-['Inter'] font-medium block mb-1">
//               Марка
//             </label>
//             <Listbox value={selectedBrand} onChange={setSelectedBrand}>
//               <div className="relative">
//                 <ListboxButton className="w-full border p-2 rounded text-left bg-black flex justify-between items-center">
//                   {brands.find((b) => b.id === selectedBrand)?.name ||
//                     "Выберите марку"}
//                   <ChevronUpDownIcon className="h-5 w-5 text-white" />
//                 </ListboxButton>
//                 <ListboxOptions className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg max-h-60 overflow-auto">
//                   {brands.map((brand) => (
//                     <ListboxOption
//                       key={brand.id}
//                       value={brand.id}
//                       className={(props: { active: boolean }) =>
//                         `cursor-pointer p-2 ${
//                           props.active
//                             ? "bg-red-100 text-black"
//                             : "text-gray-900"
//                         }`
//                       }
//                     >
//                       {({ selected }) => (
//                         <span className={selected ? "font-semibold" : ""}>
//                           {brand.name}
//                         </span>
//                       )}
//                     </ListboxOption>
//                   ))}
//                 </ListboxOptions>
//               </div>
//             </Listbox>
//           </div>
//           {/* Модель */}
//           <div>
//             <label className="font-['Inter'] font-medium block mb-1">
//               Модель
//             </label>

//             {selectedBrand !== 0 && models.length > 0 ? (
//               <Listbox
//                 value={selectedModels[0] || ""}
//                 onChange={(val) => setSelectedModels([val])}
//               >
//                 <div className="relative">
//                   <ListboxButton className="w-full border p-2 rounded text-left bg-black flex justify-between items-center text-white">
//                     <span>
//                       {models.find((m) => m.id === selectedModels[0])?.name ||
//                         "Выберите модель"}
//                     </span>
//                     <ChevronUpDownIcon className="h-5 w-5 text-white" />
//                   </ListboxButton>

//                   <ListboxOptions className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg max-h-60 overflow-auto">
//                     {models.map((model) => (
//                       <ListboxOption
//                         key={model.id}
//                         value={model.id}
//                         className={(props: { active: boolean }) =>
//                           `cursor-pointer p-2 ${
//                             props.active
//                               ? "bg-red-100 text-black"
//                               : "text-gray-900"
//                           }`
//                         }
//                       >
//                         {({ selected }) => (
//                           <span className={selected ? "font-semibold" : ""}>
//                             {model.name}
//                           </span>
//                         )}
//                       </ListboxOption>
//                     ))}
//                   </ListboxOptions>
//                 </div>
//               </Listbox>
//             ) : (
//               <p className="text-sm text-gray-500">
//                 Выберите марку для отображения моделей
//               </p>
//             )}
//           </div>
//           {/* Регион */}
//           <div>
//             <label className="font-['Inter'] font-medium block mb-1">
//               Регион
//             </label>
//             <select name="region" className="w-full border p-2 rounded">
//               <option value="">Вся Украина</option>
//               {regions.map((r) => (
//                 <option key={r.id} value={r.id}>
//                   {r.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="grid grid-cols-2 gap-2">
//             {/* КПП */}
//             <div>
//               <label className="font-['Inter'] font-medium block mb-1">
//                 КПП
//               </label>
//               <Listbox value={selectedGearbox} onChange={setSelectedGearbox}>
//                 <div className="relative">
//                   <ListboxButton className="w-full border p-2 rounded text-left bg-black flex justify-between items-center">
//                     {selectedGearbox === null
//                       ? "КПП"
//                       : selectedGearbox === 0
//                       ? "Механіка"
//                       : "Автомат"}
//                     <ChevronUpDownIcon className="h-5 w-5 text-white" />
//                   </ListboxButton>
//                   <ListboxOptions className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg max-h-60 overflow-auto">
//                     <ListboxOption
//                       value={null}
//                       className={({ active }) =>
//                         `cursor-pointer p-2 ${
//                           active ? "bg-red-100 text-black" : "text-gray-900"
//                         }`
//                       }
//                     >
//                       {({ selected }) => (
//                         <span className={selected ? "font-semibold" : ""}>
//                           КПП
//                         </span>
//                       )}
//                     </ListboxOption>
//                     <ListboxOption
//                       value={0}
//                       className={({ active }) =>
//                         `cursor-pointer p-2 ${
//                           active ? "bg-red-100 text-black" : "text-gray-900"
//                         }`
//                       }
//                     >
//                       {({ selected }) => (
//                         <span className={selected ? "font-semibold" : ""}>
//                           Механіка
//                         </span>
//                       )}
//                     </ListboxOption>
//                     <ListboxOption
//                       value={1}
//                       className={({ active }) =>
//                         `cursor-pointer p-2 ${
//                           active ? "bg-red-100 text-black" : "text-gray-900"
//                         }`
//                       }
//                     >
//                       {({ selected }) => (
//                         <span className={selected ? "font-semibold" : ""}>
//                           Автомат
//                         </span>
//                       )}
//                     </ListboxOption>
//                   </ListboxOptions>
//                 </div>
//               </Listbox>
//             </div>

//             {/* Топливо */}
//             <div>
//               <label className="font-['Inter'] font-medium block mb-1">
//                 Паливо
//               </label>
//               <Listbox value={selectedFuel} onChange={setSelectedFuel}>
//                 <div className="relative">
//                   <ListboxButton className="w-full border p-2 rounded text-left bg-black flex justify-between items-center">
//                     {selectedFuel === null
//                       ? "Паливо"
//                       : selectedFuel === 0
//                       ? "Бензин"
//                       : selectedFuel === 1
//                       ? "Дизель"
//                       : selectedFuel === 2
//                       ? "Електро"
//                       : selectedFuel === 3
//                       ? "Гібрид"
//                       : "Інше"}
//                     <ChevronUpDownIcon className="h-5 w-5 text-white" />
//                   </ListboxButton>
//                   <ListboxOptions className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg max-h-60 overflow-auto">
//                     <ListboxOption
//                       value={null}
//                       className={({ active }) =>
//                         `cursor-pointer p-2 ${
//                           active ? "bg-red-100 text-black" : "text-gray-900"
//                         }`
//                       }
//                     >
//                       {({ selected }) => (
//                         <span className={selected ? "font-semibold" : ""}>
//                           Паливо
//                         </span>
//                       )}
//                     </ListboxOption>
//                     <ListboxOption
//                       value={0}
//                       className={({ active }) =>
//                         `cursor-pointer p-2 ${
//                           active ? "bg-red-100 text-black" : "text-gray-900"
//                         }`
//                       }
//                     >
//                       {({ selected }) => (
//                         <span className={selected ? "font-semibold" : ""}>
//                           Бензин
//                         </span>
//                       )}
//                     </ListboxOption>
//                     <ListboxOption
//                       value={1}
//                       className={({ active }) =>
//                         `cursor-pointer p-2 ${
//                           active ? "bg-red-100 text-black" : "text-gray-900"
//                         }`
//                       }
//                     >
//                       {({ selected }) => (
//                         <span className={selected ? "font-semibold" : ""}>
//                           Дизель
//                         </span>
//                       )}
//                     </ListboxOption>
//                     <ListboxOption
//                       value={2}
//                       className={({ active }) =>
//                         `cursor-pointer p-2 ${
//                           active ? "bg-red-100 text-black" : "text-gray-900"
//                         }`
//                       }
//                     >
//                       {({ selected }) => (
//                         <span className={selected ? "font-semibold" : ""}>
//                           Електро
//                         </span>
//                       )}
//                     </ListboxOption>
//                     <ListboxOption
//                       value={3}
//                       className={({ active }) =>
//                         `cursor-pointer p-2 ${
//                           active ? "bg-red-100 text-black" : "text-gray-900"
//                         }`
//                       }
//                     >
//                       {({ selected }) => (
//                         <span className={selected ? "font-semibold" : ""}>
//                           Гібрид
//                         </span>
//                       )}
//                     </ListboxOption>
//                     <ListboxOption
//                       value={4}
//                       className={({ active }) =>
//                         `cursor-pointer p-2 ${
//                           active ? "bg-red-100 text-black" : "text-gray-900"
//                         }`
//                       }
//                     >
//                       {({ selected }) => (
//                         <span className={selected ? "font-semibold" : ""}>
//                           Інше
//                         </span>
//                       )}
//                     </ListboxOption>
//                   </ListboxOptions>
//                 </div>
//               </Listbox>
//             </div>
//           </div>
//           <label className="font-['Inter'] font-medium block mb-1">
//             % отклонения
//           </label>{" "}
//           <input
//             name="deviation"
//             type="number"
//             placeholder=""
//             className="border p-2 rounded w-full"
//           />
//         </div>
//         <div className="space-y-4 sm:space-y-7 pt-4 pl-4 pr-4 sm:p-8 sm:pt-14 w-full sm:w-xl mx-auto">
//           {/* Остальные поля — без изменений */}
//           <div className="grid grid-cols-3 gap-2">
//             <label className="font-['Inter'] font-medium block mb-1">
//               Цена, $
//             </label>
//             <input
//               name="minPrice"
//               defaultValue={1000}
//               type="number"
//               className="border p-2 rounded"
//             />
//             <input
//               name="maxPrice"
//               defaultValue={100000}
//               type="number"
//               className="border p-2 rounded"
//             />
//           </div>
//           <div className="grid grid-cols-3 gap-2">
//             <label className="font-['Inter'] font-medium block mb-1">Год</label>
//             <input
//               name="minYear"
//               defaultValue={2000}
//               type="number"
//               className="border p-2 rounded"
//             />
//             <input
//               name="maxYear"
//               defaultValue={2025}
//               type="number"
//               className="border p-2 rounded"
//             />
//           </div>
//           <div className="grid grid-cols-3 gap-2">
//             <label className="font-['Inter'] font-medium block mb-1">
//               Объем, см3
//             </label>
//             <input
//               name="minEngine"
//               defaultValue={0}
//               type="number"
//               step="0.1"
//               className="border p-2 rounded"
//             />
//             <input
//               name="maxEngine"
//               defaultValue={6.5}
//               type="number"
//               step="0.1"
//               className="border p-2 rounded"
//             />
//           </div>
//           <div className="grid grid-cols-3 gap-2">
//             <label className="font-['Inter'] font-medium block mb-1">
//               Пробег
//             </label>
//             <input
//               name="minMileage"
//               defaultValue={100}
//               type="number"
//               className="border p-2 rounded"
//             />
//             <input
//               name="maxMileage"
//               defaultValue={1000000}
//               type="number"
//               className="border p-2 rounded"
//             />
//           </div>
//           <label>
//             <input name="paint" type="checkbox" className="mr-2" /> Крашенные
//           </label>
//           <br />
//           <label>
//             <input name="transfer" type="checkbox" className="mr-2" />{" "}
//             Пригнанные
//           </label>
//           <br />
//           <label>
//             <input name="sold" type="checkbox" className="mr-2" /> Проданные
//           </label>
//           <br />
//           <label>
//             <input name="includeDealers" type="checkbox" className="mr-2" />{" "}
//             Включить диллеров
//           </label>
//           <br />
//           <label>
//             <input name="includeBanned" type="checkbox" className="mr-2" />{" "}
//             Включить заблокированные
//           </label>
//         </div>
//       </div>

//       <div className="space-y-4 p-7 text-center mx-auto">
//         <button
//           type="submit"
//           className="font-['Inter'] font-extralight text-[15px] sm:text-[20px] bg-[#9D0D14] hover:bg-red-700 transition px-20 py-2 rounded-[20px] text-white"
//         >
//           Подобрать авто
//         </button>
//       </div>
//     </form>
//   );
// };

// export default CarSearchForm;

"use client";

import { useEffect, useState } from "react";
import { CarSearchFilters } from "../../lib/types";
// import {
//   Listbox,
//   ListboxButton,
//   ListboxOption,
//   ListboxOptions,
// } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

type Option = { id: number; name: string };

interface CarSearchFormProps {
  onSubmit: (filters: CarSearchFilters) => void;
}

const CarSearchForm: React.FC<CarSearchFormProps> = ({ onSubmit }) => {
  const [regions, setRegions] = useState<Option[]>([]);
  const [brands, setBrands] = useState<Option[]>([]);
  const [models, setModels] = useState<Option[]>([]);

  const [selectedBrand, setSelectedBrand] = useState<number>(0); // Одиночный выбор
  const [selectedModels, setSelectedModels] = useState<number[]>([]);

  useEffect(() => {
    fetch("/api/regions")
      .then((res) => res.json())
      .then((data) => setRegions(data));

    fetch("/api/brands")
      .then((res) => res.json())
      .then((data) => setBrands([{ id: 0, name: "Все марки" }, ...data]));
  }, []);

  useEffect(() => {
    if (selectedBrand && selectedBrand !== 0) {
      fetch("/api/models/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brands: [selectedBrand] }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) setModels(data);
          else if (Array.isArray(data.models)) setModels(data.models);
          else {
            console.error("Unexpected response format", data);
            setModels([]);
          }
        })
        .catch((err) => {
          console.error("Failed to fetch models", err);
          setModels([]);
        });
    } else {
      setModels([]);
      setSelectedModels([]); // очищаем при выборе "Все марки"
    }
  }, [selectedBrand]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data: CarSearchFilters = {
      brands: selectedBrand === 0 ? [] : [selectedBrand],
      models: selectedModels.length > 0 ? selectedModels : [],
      region: Number(formData.get("region")) || undefined,
      minPrice: Number(formData.get("minPrice")) || undefined,
      maxPrice: Number(formData.get("maxPrice")) || undefined,
      minYear: Number(formData.get("minYear")),
      maxYear: Number(formData.get("maxYear")),
      minEngineVolume: Number(formData.get("minEngine")) || undefined,
      maxEngineVolume: Number(formData.get("maxEngine")) || undefined,
      minMileage: Number(formData.get("minMileage")) || undefined,
      maxMileage: Number(formData.get("maxMileage")) || undefined,
      gearbox:
        formData.get("gearbox") !== ""
          ? Number(formData.get("gearbox"))
          : undefined,
      fuel:
        formData.get("fuel") !== "" ? Number(formData.get("fuel")) : undefined,
      paint: formData.get("paint") === "on",
      transfer: formData.get("transfer") === "on",
      sold: formData.get("sold") === "on",
      includeDealers: formData.get("includeDealers") === "on",
      includeBanned: formData.get("includeBanned") === "on",
      state:
        formData.get("state") !== ""
          ? Number(formData.get("state"))
          : undefined,
      marketPriceDeviation: Number(formData.get("deviation")) || 0,
      period: 72,
    };

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSearch} className="pt-10 sm:pt-15">
      <div className="flex flex-col sm:flex-row">
        {" "}
        <div className="space-y-4 sm:space-y-8 pt-8 pl-4 pr-4 sm:p-8 w-full sm:w-xl mx-auto">
          {/* Марка */}
          <div>
            <label className="font-['Inter'] font-medium block mb-1">
              Марка
            </label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(Number(e.target.value))}
              className="w-full border p-2 rounded"
            >
              {brands.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>
          {/* Модель */}
          <div>
            <label className="font-['Inter'] font-medium block mb-1">
              Модель
            </label>
            {selectedBrand !== 0 && models.length > 0 ? (
              <select
                name="model"
                value={selectedModels[0] || ""}
                onChange={(e) => setSelectedModels([Number(e.target.value)])}
                className="bg-black text-white w-full border p-2 rounded"
              >
                <option value="" className="bg-black text-white">
                  Выберите модель
                </option>
                {models.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
            ) : (
              <p className="text-sm text-gray-500">
                Выберите марку для отображения моделей
              </p>
            )}
          </div>
          {/* Регион */}
          <div>
            <label className="font-['Inter'] font-medium block mb-1">
              Регион
            </label>
            <select name="region" className="w-full border p-2 rounded">
              <option value="">Вся Украина</option>
              {regions.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <select name="gearbox" className="border p-2 rounded">
              <option value="">КПП</option>
              <option value="0">Механіка</option>
              <option value="1">Автомат</option>
            </select>

            <select name="fuel" className="border p-2 rounded">
              <option value="">Паливо</option>
              <option value="0">Бензин</option>
              <option value="1">Дизель</option>
              <option value="2">Електро</option>
              <option value="3">Гібрид</option>
              <option value="4">Інше</option>
            </select>
          </div>
          <label className="font-['Inter'] font-medium block mb-1">
            % отклонения
          </label>{" "}
          <input
            name="deviation"
            type="number"
            placeholder=""
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="space-y-4 sm:space-y-7 pt-4 pl-4 pr-4 sm:p-8 sm:pt-14 w-full sm:w-xl mx-auto">
          {/* Остальные поля — без изменений */}
          <div className="grid grid-cols-3 gap-2">
            <label className="font-['Inter'] font-medium block mb-1">
              Цена, $
            </label>
            <input
              name="minPrice"
              defaultValue={1000}
              type="number"
              className="border p-2 rounded"
            />
            <input
              name="maxPrice"
              defaultValue={100000}
              type="number"
              className="border p-2 rounded"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <label className="font-['Inter'] font-medium block mb-1">Год</label>
            <input
              name="minYear"
              defaultValue={2000}
              type="number"
              className="border p-2 rounded"
            />
            <input
              name="maxYear"
              defaultValue={2025}
              type="number"
              className="border p-2 rounded"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <label className="font-['Inter'] font-medium block mb-1">
              Объем, см3
            </label>
            <input
              name="minEngine"
              defaultValue={0}
              type="number"
              step="0.1"
              className="border p-2 rounded"
            />
            <input
              name="maxEngine"
              defaultValue={6.5}
              type="number"
              step="0.1"
              className="border p-2 rounded"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <label className="font-['Inter'] font-medium block mb-1">
              Пробег
            </label>
            <input
              name="minMileage"
              defaultValue={100}
              type="number"
              className="border p-2 rounded"
            />
            <input
              name="maxMileage"
              defaultValue={1000000}
              type="number"
              className="border p-2 rounded"
            />
          </div>
          <label>
            <input name="paint" type="checkbox" className="mr-2" /> Крашенные
          </label>
          <br />
          <label>
            <input name="transfer" type="checkbox" className="mr-2" />{" "}
            Пригнанные
          </label>
          <br />
          <label>
            <input name="sold" type="checkbox" className="mr-2" /> Проданные
          </label>
          <br />
          <label>
            <input name="includeDealers" type="checkbox" className="mr-2" />{" "}
            Включить диллеров
          </label>
          <br />
          <label>
            <input name="includeBanned" type="checkbox" className="mr-2" />{" "}
            Включить заблокированные
          </label>
        </div>
      </div>

      <div className="space-y-4 p-7 text-center mx-auto">
        <button
          type="submit"
          className="font-['Inter'] font-extralight text-[15px] sm:text-[20px] bg-[#9D0D14] hover:bg-red-700 transition px-20 py-2 rounded-[20px] text-white"
        >
          Подобрать авто
        </button>
      </div>
    </form>
  );
};

export default CarSearchForm;
