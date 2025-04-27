import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white pt-5 pb-20 px-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/images/bg.png)",
        }}
      >
        <div className="flex justify-left items-center pt-0 pb-[77px]">
          <Image
            src="/images/logo.png" // Убедись, что путь правильный
            alt="Logo"
            width={357} // Укажи подходящую ширину
            height={50} // Укажи подходящую высоту
            className="object-contain" // Применяем стиль, чтобы логотип не искажался
          />
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-['plusjakarta'] font-bold text-3xl md:text-5xl">
            ЛУЧШИЙ ИНСТРУМЕНТ ДЛЯ ПОИСКА АВТОМОБИЛЕЙ НИЖЕ РЫНОЧНОЙ ЦЕНЫ
          </h1>
          <p className="font-['plusjakarta'] mt-4 text-[12px] sm:text-[24px] max-w-[60%] mx-auto">
            Только у нас Вы получите актуальные предложения от владельцев по
            всей Украине, со всех интернет ресурсов по интересным ценам{" "}
          </p>
          <button className="mt-6 bg-red-600 hover:bg-red-700 transition px-6 py-2 rounded text-white font-semibold">
            Вход на портал
          </button>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { name: "Lexus", count: 380, img: "/images/lexus.png" },
              { name: "Мерс", count: 290, img: "/images/merc.png" },
              { name: "Suzuki", count: 264, img: "/images/suzuki.png" },
              { name: "Honda", count: 245, img: "/images/honda.png" },
              { name: "Hyundai", count: 234, img: "/images/hyundai.png" },
              { name: "Ferrari", count: 109, img: "/images/ferrari.png" },
            ].map((brand) => (
              <div
                key={brand.name}
                className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-4 w-42 h-20"
              >
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src={brand.img}
                    alt={brand.name}
                    width={80}
                    height={80}
                    className="h-12 object-contain"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="text-gray-800 font-semibold">
                    {brand.count} Cars
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#1d0f0e] text-white py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="bg-gradient-to-br from-red-600 to-red-400 rounded-2xl p-6 md:p-8 text-white max-w-md shadow-lg relative">
            <p className="mb-6 text-sm md:text-base">
              Выбрать и купить новый автомобиль на PERECUP можно достаточно
              просто и быстро — благодаря удобному подбору авто по параметрам,
              сервису сравнения автомобилей и интуитивно простой навигации.
            </p>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-xl hover:bg-gray-200 transition">
              ВХОД НА ПОРТАЛ
            </button>
            <div className="absolute right-4 bottom-4 w-28 md:w-36">
              <Image
                src="/images/02.png" // Замените на актуальный путь к изображению
                alt="Red sports car"
                width={300}
                height={150}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center justify-center relative w-full md:w-auto">
            <Image
              src="/images/01.png" // Замените на актуальный путь к изображению
              alt="White SUV"
              width={450}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="text-3xl md:text-4xl font-bold mb-4">
            КАК ЭТО РАБОТАЕТ
          </div>
          <div className="text-white text-3xl">⬇</div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#1d0f0e] text-white py-16 px-4 md:px-12 space-y-24">
        {/* Section 1 */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/03.png"
                alt="Red car on the street"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="absolute top-4 left-4 bg-white text-black text-sm px-4 py-2 rounded-full shadow-md">
              Все авто в одном месте
            </div>
            <div className="absolute top-2 right-2 w-10 h-10 rounded-full border-2 border-white overflow-hidden">
              <Image
                src="/avatar.png"
                alt="User avatar"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6 mt-8 md:mt-0">
            <div className="flex items-start gap-4">
              <Image
                src="/images/Frame01.png"
                alt="All Portals"
                width={32}
                height={32}
              />
              <div>
                <h4 className="font-bold text-lg">
                  Все объявления со всех автомобильных порталов Украины
                </h4>
                <p className="text-sm">
                  собираются в одном месте. Система определяет кто перекупщик, а
                  кто хозяин по количеству размещенных автомобилей с номера
                  телефона за последние 4 года
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Image
                src="/images/Frame02.png"
                alt="Price Calc"
                width={32}
                height={32}
              />
              <div>
                <h4 className="font-bold text-lg">
                  Программа рассчитывает рыночную цену для каждого
                </h4>
                <p className="text-sm">
                  автомобиля среди аналогичных авто в нашей базе
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Image
                src="/images/Frame03.png"
                alt="Blacklist"
                width={32}
                height={32}
              />
              <div>
                <h4 className="font-bold text-lg">
                  Черный список в который входят: объявления от лизинга,
                </h4>
                <p className="text-sm">
                  рассрочки, и просто фейковых объявлений
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Image
                src="/images/Frame04.png"
                alt="Filter"
                width={32}
                height={32}
              />
              <div>
                <h4 className="font-bold text-lg">
                  Фильтр от перекупщиков : при желании можно убрать
                </h4>
                <p className="text-sm">
                  объявления от перекупщиков и площадок, а так же исключить
                  пригнанные авто
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-start gap-4">
              <Image
                src="/images/Frame01.png"
                alt="Price Change"
                width={32}
                height={32}
              />
              <div>
                <h4 className="font-bold text-lg">
                  Система непрерывно следит за изменением цены в
                </h4>
                <p className="text-sm">
                  объявлениях : если в старом объявлении изменится цена в
                  меньшую сторону без повторной публикации и попадет под ваш
                  фильтр вы получите уведомление
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Image
                src="/images/Frame02.png"
                alt="Notification"
                width={32}
                height={32}
              />
              <div>
                <h4 className="font-bold text-lg">
                  Мгновенное оповещение о новых автомобилях на смартфон , по
                </h4>
                <p className="text-sm">
                  заданным параметрам ( марка, модель, год, разница от рыночной
                  цены)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Image
                src="/images/Frame03.png"
                alt="Choose"
                width={32}
                height={32}
              />
              <div>
                <h4 className="font-bold text-lg">
                  Вам нужно только сделать выборку марок, моделей которые вам
                </h4>
                <p className="text-sm">
                  интересны, и отклонение от рыночной цены и получать
                  уведомления по этому фильтру
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Image
                src="/images/Frame04.png"
                alt="Fast"
                width={32}
                height={32}
              />
              <div>
                <h4 className="font-bold text-lg">
                  В среднем пару минут проходит от публикации на автосайтах до
                </h4>
                <p className="text-sm">
                  попадения в наш автопортал и Ваш смартфон
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2 overflow-hidden">
                <Image
                  src="/avatars/user1.png"
                  alt="User 1"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <Image
                  src="/avatars/user2.png"
                  alt="User 2"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <Image
                  src="/avatars/user3.png"
                  alt="User 3"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <Image
                  src="/avatars/user4.png"
                  alt="User 4"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <p className="text-white text-sm font-semibold">
                34,000+ <br /> Довольных клиентов
              </p>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 mt-10 md:mt-0">
            <div className="bg-white text-center rounded-[30px] px-6 py-6 mb-4 max-w-md mx-autoc">
              <div className="flex justify-center gap-4 mb-4 relative">
                <Image
                  src="/icons/icon1.png"
                  alt="Icon 1"
                  width={32}
                  height={32}
                />
                <Image
                  src="/icons/icon2.png"
                  alt="Icon 2"
                  width={32}
                  height={32}
                />
                <Image
                  src="/icons/icon3.png"
                  alt="Icon 3"
                  width={32}
                  height={32}
                />
              </div>
              <p className="text-[#941818] font-bold text-lg leading-snug">
                Устал сутками сидеть на разных сайтах <br />
                поисках интересных вариантов , наш <br />
                сервис кардинально изменит твой доход !
              </p>
            </div>

            <div className="absolute rounded-xl overflow-hidden">
              <Image
                src="/images/04.png"
                alt="Black SUV"
                width={800}
                height={400}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0f0f] text-white px-6 py-16 relative">
        <div className="max-w-6xl mx-auto">
          <p className="text-center w-full mx-auto mb-8">
            Для того чтобы увидеть все возможности нашего сервиса вам нужно
            зарегистрироваться и указать тот номер телефона, на котором
            установлен Telegram, чтобы получать уведомления о новых авто. После
            чего вам будет доступен день{" "}
            <span className="text-red-400">бесплатного</span> пользования.
          </p>
          <p className="text-center font-semibold uppercase mb-6">
            Повторная регистрация не допускается
          </p>
          <p className="text-center w-full mx-auto mb-12">
            Наша команда постоянно работает над улучшением нашего сервиса, чтобы
            вам было удобнее находить и покупать авто. Добавлена возможность
            посмотреть только проданные авто по заданным параметрам,
            прицениться, а также исключить пригнанные.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-semibold">Телефон:</span> (050)-462-01-59
              </p>
              <p>
                <span className="font-semibold">Адрес:</span> Украина
              </p>
              <p>
                <span className="font-semibold">E-mail:</span> volna2007@meta.ua
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-red-500">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-red-500">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-red-500">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="#" className="hover:text-red-500">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/05.png"
                alt="Tesla"
                width={256}
                height={144}
                className="w-150 object-contain"
              />
            </div>
          </div>

          <h2 className="text-6xl md:text-8xl font-bold text-center text-gray-700 mt-16 opacity-10">
            PEREKUP-PRO
          </h2>
        </div>
      </footer>
    </main>
  );
}
