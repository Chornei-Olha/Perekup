"use client";

import { useEffect, useState } from "react";
import { CarSearchFilters } from "../../lib/types";
// Тип для опций, которые будут передаваться в формы
type Option = { id: number; name: string };

interface CarSearchFormProps {
  onSubmit: (filters: CarSearchFilters) => void; // Типизируем onSubmit проп
}

const CarSearchForm: React.FC<CarSearchFormProps> = ({ onSubmit }) => {
  const [regions, setRegions] = useState<Option[]>([]);
  const [brands, setBrands] = useState<Option[]>([]);
  const [models, setModels] = useState<Option[]>([]);

  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  const [selectedModels, setSelectedModels] = useState<number[]>([]);

  useEffect(() => {
    fetch("/api/regions")
      .then((res) => res.json())
      .then(setRegions);

    fetch("/api/brands")
      .then((res) => res.json())
      .then(setBrands);
  }, []);

  useEffect(() => {
    if (selectedBrands.length > 0) {
      fetch("/api/models/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brands: selectedBrands }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setModels(data);
          } else if (Array.isArray(data.models)) {
            setModels(data.models);
          } else {
            console.error("Unexpected response format", data);
            setModels([]);
          }
        })
        .catch((err) => {
          console.error("Failed to fetch models", err);
          setModels([]);
        });
    } else {
      setModels([]); // очищаем, если ничего не выбрано
    }
  }, [selectedBrands]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data: CarSearchFilters = {
      brands: selectedBrands,
      models: selectedModels,
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

    onSubmit(data); // Передаем данные обратно в родительский компонент
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4 p-4 max-w-xl mx-auto">
      {/* Выбор марки */}
      <div>
        <label className="block mb-1">Марка</label>
        <select
          multiple
          onChange={(e) =>
            setSelectedBrands(
              Array.from(e.target.selectedOptions, (opt) => Number(opt.value))
            )
          }
          className="w-full border p-2 rounded"
        >
          {brands.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>
      </div>

      {/* Выбор модели */}
      <div>
        <label className="block mb-1">Модель</label>
        <select
          multiple
          onChange={(e) =>
            setSelectedModels(
              Array.from(e.target.selectedOptions, (opt) => Number(opt.value))
            )
          }
          className="w-full border p-2 rounded"
        >
          {models.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>
      </div>

      {/* Выбор региона */}
      <div>
        <label className="block mb-1">Регион</label>
        <select name="region" className="w-full border p-2 rounded">
          <option value="">Вся Украина</option>
          {regions.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </select>
      </div>

      {/* Поля для цен и года */}
      <div className="grid grid-cols-3 gap-2">
        <label className="block mb-1">Цена, $</label>
        <input
          name="minPrice"
          placeholder="1000"
          type="number"
          className="border p-2 rounded"
        />
        <input
          name="maxPrice"
          placeholder="100 000"
          type="number"
          className="border p-2 rounded"
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <label className="block mb-1">Год</label>
        <input
          name="minYear"
          placeholder="2010"
          defaultValue={2010}
          type="number"
          className="border p-2 rounded"
        />
        <input
          name="maxYear"
          placeholder="2025"
          defaultValue={2025}
          type="number"
          className="border p-2 rounded"
        />
      </div>

      {/* Поля для объема двигателя и пробега */}
      <div className="grid grid-cols-3 gap-2">
        <label className="block mb-1">Объем, см3</label>

        <input
          name="minEngine"
          placeholder="0"
          type="number"
          step="0.1"
          className="border p-2 rounded"
        />
        <input
          name="maxEngine"
          placeholder="6.5"
          type="number"
          step="0.1"
          className="border p-2 rounded"
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <label className="block mb-1">Пробег</label>
        <input
          name="minMileage"
          placeholder="100"
          type="number"
          className="border p-2 rounded"
        />
        <input
          name="maxMileage"
          placeholder="1000 000"
          type="number"
          className="border p-2 rounded"
        />
      </div>

      {/* КПП и топливо */}
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

      {/* Вкл/выкл параметры */}
      <input
        name="deviation"
        type="number"
        placeholder="% відхилення"
        className="border p-2 rounded w-full"
      />

      <div className="space-y-2">
        <label>
          <input name="paint" type="checkbox" className="mr-2" />
          Крашенные
        </label>
        <br />
        <label>
          <input name="transfer" type="checkbox" className="mr-2" />
          Пригнанные
        </label>
        <br />
        <label>
          <input name="sold" type="checkbox" className="mr-2" />
          Проданные
        </label>
        <br />
        <label>
          <input name="includeDealers" type="checkbox" className="mr-2" />
          Включить диллеров
        </label>
        <br />
        <label>
          <input name="includeBanned" type="checkbox" className="mr-2" />
          Включить заблокированные
        </label>
        <br />
      </div>

      <button
        type="submit"
        className="bg-red-700 text-white py-2 px-4 rounded w-full"
      >
        Подобрать авто
      </button>
    </form>
  );
};
export default CarSearchForm;
