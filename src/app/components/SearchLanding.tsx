export default function SearchLanding() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-red-900 text-black p-4 sm:p-6 md:p-10">
      <div className="max-w-7xl mx-auto rounded-3xl bg-white p-6 md:p-10 space-y-6 shadow-xl">
        {/* Top Buttons */}
        <div className="flex flex-wrap justify-end gap-2">
          <button className="bg-[#9f1b1b] text-white text-sm px-4 py-2 rounded-full">
            Задать фильтры для уведомлений
          </button>
          <button className="bg-[#9f1b1b] text-white text-sm px-4 py-2 rounded-full">
            Сменить пароль
          </button>
          <button className="bg-[#9f1b1b] text-white text-sm px-4 py-2 rounded-full">
            Купить Премиум
          </button>
          <button className="bg-[#9f1b1b] text-white text-sm px-4 py-2 rounded-full">
            Выход
          </button>
        </div>

        {/* Remaining Time and Email */}
        <div className="flex justify-between text-sm font-semibold">
          <span className="text-[#9f1b1b]">
            У вас осталось 1 дней использования
          </span>
          <span>b45893456@gmail.com</span>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <input
            className="border p-2 rounded"
            placeholder="Выбраны все марки"
          />
          <input
            className="border p-2 rounded"
            placeholder="Выбраны все модели"
          />
          <input className="border p-2 rounded" placeholder="Вся Украина" />

          <input className="border p-2 rounded" placeholder="КПП Любой" />
          <input className="border p-2 rounded" placeholder="Топливо Любой" />
          <div className="flex gap-2">
            <input
              className="border p-2 rounded w-1/2"
              placeholder="Год от"
              defaultValue="2010"
            />
            <input
              className="border p-2 rounded w-1/2"
              placeholder="до"
              defaultValue="2025"
            />
          </div>

          <div className="flex items-center gap-2 col-span-3">
            <input type="checkbox" id="dealers" className="accent-[#9f1b1b]" />
            <label htmlFor="dealers">отобразить без диллеров</label>
            <input
              type="checkbox"
              id="blocked"
              defaultChecked
              className="accent-[#9f1b1b]"
            />
            <label htmlFor="blocked">исключить заблокирован.</label>
            <button className="border p-1 rounded">
              Показать с проданными
            </button>
          </div>

          <div className="flex gap-2 col-span-3">
            <input
              className="border p-2 rounded w-full"
              placeholder="Состояние Целые"
            />
            <button className="border p-1 rounded">
              Показать с крашенными
            </button>
            <button className="border p-1 rounded">
              Показать с пригнанными
            </button>
            <span className="text-lg font-bold">?</span>
          </div>

          <div className="flex gap-2 items-center">
            <label>Цена</label>
            <input className="border p-2 rounded w-full" defaultValue="1000" />
            <span>-</span>
            <input
              className="border p-2 rounded w-full"
              defaultValue="100000"
            />
            <span>$</span>
          </div>

          <div className="flex gap-2 items-center">
            <label>Объем</label>
            <input className="border p-2 rounded w-full" defaultValue="0" />
            <span>-</span>
            <input className="border p-2 rounded w-full" defaultValue="6.5" />
            <span>см3</span>
          </div>

          <div className="flex gap-2 items-center">
            <label>Пробег</label>
            <input className="border p-2 rounded w-full" defaultValue="100" />
            <span>-</span>
            <input
              className="border p-2 rounded w-full"
              defaultValue="1000000"
            />
            <span>км</span>
          </div>

          <div className="flex items-center col-span-3">
            <label className="mr-2">Отклонение от рыночной цены</label>
            <input
              type="number"
              className="border p-2 rounded w-24"
              defaultValue="0"
            />
          </div>

          <div className="col-span-3">
            <label>
              Период <span className="text-[#9f1b1b]">3 дня</span>
            </label>
            <input className="border p-2 rounded w-full mt-1" />
          </div>

          <div className="col-span-3 flex justify-end">
            <button className="bg-[#9f1b1b] text-white px-6 py-3 rounded-xl">
              Подобрать авто
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Table Head Placeholder */}
      <div className="max-w-7xl mx-auto mt-6 bg-white rounded-2xl p-4 grid grid-cols-6 text-xs text-center text-[#9f1b1b] font-semibold">
        <span>Фото</span>
        <span>Характеристики</span>
        <span>t от рын.цены</span>
        <span>
          Кол.объяв автора
          <br />
          (за 2 года)
        </span>
        <span>
          Обновленно
          <br />
          Сайт
        </span>
        <span>Описание</span>
      </div>
    </section>
  );
}
