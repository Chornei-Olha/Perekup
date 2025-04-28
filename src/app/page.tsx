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
            src="/images/logo-desktop.png"
            alt="Logo"
            width={357} // Укажи подходящую ширину
            height={50} // Укажи подходящую высоту
            className="object-contain"
          />
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-plusjakarta font-bold text-3xl md:text-5xl">
            ЛУЧШИЙ ИНСТРУМЕНТ ДЛЯ ПОИСКА АВТОМОБИЛЕЙ НИЖЕ РЫНОЧНОЙ ЦЕНЫ
          </h1>
          <p className="font-plusjakarta mt-4 text-[12px] sm:text-[24px] max-w-[60%] mx-auto">
            Только у нас Вы получите актуальные предложения от владельцев по
            всей Украине, со всех интернет ресурсов по интересным ценам{" "}
          </p>
          <button className="font-plusjakarta font-bold text-[20px] sm:text-[39px] mt-6 bg-[#9D0D14] hover:bg-red-700 transition px-7 py-2 rounded-[20px] text-white">
            Вход на портал
          </button>
          <p className="font-plusjakarta font-medium text-[12px] sm:text-[16px] pt-5 pb-3">
            Самый удобный сервис. Все сайты в одном кабинете A­­utoRia, OLX,
            RST, Avtobazar и др.
          </p>
          <p className="font-plusjakarta font-semibold text-[12px] sm:text-[16px]">
            Получай первым самые выгодные предложения.
          </p>
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
                    className="object-contain"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="font-manrope font-medium text-[12px] sm:text-[16px] text-[#667085]">
                    {brand.count} Cars
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        className="relative bg-[#6E1A1A]"
        style={{
          backgroundImage: "url(/images/bg-desktop.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        {" "}
        {/* How It Works Section */}
        <section className=" text-white py-16">
          <div className="max-w-7xl ml-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="bg-[#FF001D] rounded-2xl p-6 sm:p-8 text-white max-w-md shadow-lg relative">
              <p className="font-opensans font-regular text-[11px] sm:text-[14px] mb-6">
                Выбрать и купить новый автомобиль на PERECUP можно достаточно
                просто и быстро — благодаря удобному подбору авто по параметрам,
                сервису сравнения автомобилей и интуитивно простой навигации.
              </p>
              <button className="font-plusjakarta font-bold text-[12px] sm:text-[14px] bg-white text-[#821810] py-2 px-4 rounded-xl hover:bg-gray-200 transition">
                ВХОД НА ПОРТАЛ
              </button>
              <div className="absolute right-0 bottom-0 w-28 md:w-50">
                <Image
                  src="/images/02.png"
                  alt="Red sports car"
                  width={500}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex items-center justify-center relative w-full md:w-auto">
              <Image
                src="/images/01.png"
                alt="White SUV"
                width={450}
                height={300}
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center">
            <div>
              {" "}
              <p className="text-[70px]">▼</p>
            </div>
            <div className="font-opensans font-bold text-[30px] sm:text-[50px]">
              КАК ЭТО РАБОТАЕТ
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className=" text-white py-5 px-4 md:px-12 space-y-24">
          {/* Section 1 */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <div className="relative">
                {" "}
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/images/03.png"
                    alt="Red car on the street"
                    width={600}
                    height={400}
                    className="object-cover max-w-[560px] h-auto"
                  />
                </div>
                <div className="absolute font-plusjakarta font-light text-[10px] sm:text-[14px] top-23 right-50 bg-white text-[#821810] px-4 py-2 rounded-full shadow-md">
                  Все авто в одном месте
                </div>
                <div className="absolute top-7 right-35 w-18 h-18 rounded-full">
                  <Image
                    src="/images/Group.png"
                    alt="User avatar"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-[550px] space-y-8 mt-8 md:mt-0">
              <div className="flex items-start gap-[40px]">
                <Image
                  src="/images/Frame01.png"
                  alt="All Portals"
                  width={66}
                  height={66}
                />
                <div>
                  <h4 className="font-opensans font-semibold text-[16px] sm:text-[24px] leading-none mb-[17px]">
                    Все объявления со всех автомобильных порталов Украины
                  </h4>
                  <p className="font-opensans font-regular text-[12px] sm:text-[16px]">
                    собираются в одном месте. Система определяет кто перекупщик,
                    а кто хозяин по количеству размещенных автомобилей с номера
                    телефона за последние 4 года{" "}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[40px]">
                <Image
                  src="/images/Frame02.png"
                  alt="Price Calc"
                  width={66}
                  height={66}
                />
                <div>
                  <h4 className="font-opensans font-semibold text-[16px] sm:text-[24px] leading-none mb-[17px]">
                    Программа рассчитывает рыночную цену для каждого
                  </h4>
                  <p className="font-opensans font-regular text-[12px] sm:text-[16px]">
                    автомобиля среди аналогичных авто в нашей базе
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[40px]">
                <Image
                  src="/images/Frame03.png"
                  alt="Blacklist"
                  width={66}
                  height={66}
                />
                <div>
                  <h4 className="font-opensans font-semibold text-[16px] sm:text-[24px] leading-none mb-[17px]">
                    Черный список в который входят: объявления от лизинга,
                  </h4>
                  <p className="font-opensans font-regular text-[12px] sm:text-[16px]">
                    рассрочки, и просто фейковых объявлений
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[40px]">
                <Image
                  src="/images/Frame04.png"
                  alt="Filter"
                  width={66}
                  height={66}
                />
                <div>
                  <h4 className="font-opensans font-semibold text-[16px] sm:text-[24px] leading-none mb-[17px]">
                    Фильтр от перекупщиков : при желании можно убрать
                  </h4>
                  <p className="font-opensans font-regular text-[12px] sm:text-[16px]">
                    объявления от перекупщиков и площадок, а так же исключить
                    пригнанные авто
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="w-full md:w-[550px] space-y-8">
              <div className="flex items-start gap-[40px]">
                <Image
                  src="/images/Frame01.png"
                  alt="All Portals"
                  width={66}
                  height={66}
                />
                <div>
                  <h4 className="font-opensans font-semibold text-[16px] sm:text-[24px] leading-none mb-[17px]">
                    Система непрерывно следит за изменением цены в
                  </h4>
                  <p className="font-opensans font-regular text-[12px] sm:text-[16px]">
                    объявлениях : если в старом объявлении изменится цена в
                    меньшую сторону без повторной публикации и попадет под ваш
                    фильтр вы получите уведомление
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[40px]">
                <Image
                  src="/images/Frame02.png"
                  alt="Notification"
                  width={66}
                  height={66}
                />
                <div>
                  <h4 className="font-opensans font-semibold text-[16px] sm:text-[24px] leading-none mb-[17px]">
                    Мгновенное оповещение о новых автомобилях на смартфон, по
                  </h4>
                  <p className="font-opensans font-regular text-[12px] sm:text-[16px]">
                    заданным параметрам ( марка, модель, год, разница от
                    рыночной цены)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[40px]">
                <Image
                  src="/images/Frame03.png"
                  alt="Choose"
                  width={66}
                  height={66}
                />
                <div>
                  <h4 className="font-opensans font-semibold text-[16px] sm:text-[24px] leading-none mb-[17px]">
                    Вам нужно только сделать выборку марок, моделей которые вам
                  </h4>
                  <p className="font-opensans font-regular text-[12px] sm:text-[16px]">
                    интересны, и отклонение от рыночной цены и получать
                    уведомления по этому фильтру
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[40px]">
                <Image
                  src="/images/Frame04.png"
                  alt="Fast"
                  width={66}
                  height={66}
                />
                <div>
                  <h4 className="font-opensans font-semibold text-[16px] sm:text-[24px] leading-none mb-[17px]">
                    В среднем пару минут проходит от публикации на автосайтах до
                  </h4>
                  <p className="font-opensans font-regular text-[12px] sm:text-[16px]">
                    попадения в наш автопортал и Ваш смартфон
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-10">
                <div className="flex -space-x-2 overflow-hidden">
                  <Image
                    src="/images/clients.png"
                    alt="Users"
                    width={350}
                    height={100}
                  />
                </div>
                {/* <p className="text-white text-sm font-semibold">
                34,000+ <br /> Довольных клиентов
              </p> */}
              </div>
            </div>

            <div className="relative w-full md:w-1/2 mt-10 md:mt-0">
              <div className="relative bg-white text-center rounded-[30px] px-2 pt-5 max-w-md mx-auto h-[538px] shadow-[0px_4px_22.8px_20px_rgba(255,1,1,0.25)]">
                <div className="flex justify-start gap-4 mb-4">
                  <Image
                    src="/images/icons.png"
                    alt="Icon 1"
                    width={180}
                    height={60}
                  />
                </div>
                <p className="font-opensans font-bold text-[15px] sm:text-[24px] text-[#941818] leading-tight">
                  Устал сутками сидеть на разных сайтах <br />
                  в поисках интересных вариантов, наш <br />
                  сервис кардинально изменит твой доход!
                </p>
              </div>

              <div className="absolute rounded-xl overflow-hidden bottom-[-40px] right-[-70px]">
                <Image
                  src="/images/04.png"
                  alt="Black SUV"
                  width={800}
                  height={400}
                  className="object-contain max-w-[819px] h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Section bottom */}
        <section className="px-4">
          <h2 className="font-plusjakarta font-bold text-[30px] sm:text-[50px] text-white text-center py-[75px]">
            НАШ СЕРВИС БУДЕТ ПОЛЕЗЕН
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-[120px]">
            {/* Карточка 1 */}
            <div className="bg-transparent text-white flex flex-col justify-between p-6 rounded-2xl ">
              <div>
                <h3 className="font-plusjakarta font-semibold text-[14px] sm:text-[20px] text-xl mb-4 text-center">
                  ПЕРЕКУПЩИКАМ
                </h3>
                <p className="font-plusjakarta font-medium text-[10px] sm:text-[14px] leading-relaxed text-left">
                  Первым получай предложения по цене ниже рыночной в твоем
                  регионе. <br />
                  Первым узнавай об изменении цены на актуальные для тебя
                  объявления. <br />
                  Отсеивай объявления от перекупов. Сможешь видеть машины с
                  ценой ниже рыночной со всех автосайтов Украины. <br />
                  <span className="font-semibold">Уведомления в телеграм.</span>
                </p>
              </div>
              <button className="font-opensans font-bold text-[10px] sm:text-[17px] bg-white text-[#821810] p-[20px] rounded-[20px] mt-6 hover:bg-gray-100 transition w-[256px]">
                ПОПРОБОВАТЬ БЕСПЛАТНО
              </button>
            </div>

            {/* Карточка 2 */}
            <div className="bg-transparent text-white text-center flex flex-col justify-between p-6 rounded-2xl ">
              <div>
                <h3 className="font-plusjakarta font-semibold text-[14px] sm:text-[20px] text-xl mb-4 text-center">
                  ПЛОЩАДКАМ ПО ПОДБОРУ АВТОМОБИЛЕЙ
                </h3>
                <p className="font-plusjakarta font-medium text-[10px] sm:text-[14px] leading-relaxed text-left">
                  Собраны все актуальные объявления. Экономия времени и
                  персонала на поиск авто. <br />
                  Продуманный интерфейс. <br />
                  Удобная система оповещения о новых предложениях или изменениях
                  цены на телеграм.
                </p>
              </div>
              <button className="font-opensans font-bold text-[10px] sm:text-[17px] bg-white text-[#821810] p-[20px] rounded-[20px] mt-6 hover:bg-gray-100 transition w-[256px]">
                ПОПРОБОВАТЬ БЕСПЛАТНО
              </button>
            </div>

            {/* Карточка 3 */}
            <div className="bg-transparent text-white text-center flex flex-col justify-between p-6 rounded-2xl ">
              <div>
                <h3 className="font-plusjakarta font-semibold text-[14px] sm:text-[20px] text-xl mb-4 text-center">
                  ТЕМ КТО ИЩЕТ ХОРОШИЙ АВТО
                </h3>
                <p className="font-plusjakarta font-medium text-[10px] sm:text-[14px] leading-relaxed text-left">
                  Фильтр от перекупщиков и площадок. <br />
                  Видишь сколько реально времени авто в продаже и как менялась
                  цена. <br />
                  Если на сайте нет подходящего авто, активируйте уведомления в
                  телеграм и получайте самые свежие объявления, занимаясь своими
                  делами.
                </p>
              </div>
              <button className="font-opensans font-bold text-[10px] sm:text-[17px] bg-white text-[#821810] p-[20px] rounded-[20px] mt-6 hover:bg-gray-100 transition w-[256px]">
                ПОПРОБОВАТЬ БЕСПЛАТНО
              </button>
            </div>
          </div>
          <p className="font-opensans font-regular text-[12px] sm:text-[16px] text-center w-full mx-auto mb-8 text-white">
            Для того чтобы увидеть все возможности нашего сервиса вам нужно
            зарегистрироваться и указать тот номер телефона, на котором
            установлен Telegram, чтобы получать уведомления о новых авто. После
            чего вам будет доступен день{" "}
            <span className="text-[#FA374A]">бесплатного</span> пользования.
          </p>
          <p className="font-opensans font-regular text-[12px] sm:text-[16px] text-center font-semibold uppercase text-white">
            Повторная регистрация не допускается
          </p>
          <p className="font-opensans font-regular text-[12px] sm:text-[16px] text-center w-full mx-auto mb-12 text-white">
            Наша команда постоянно работает над улучшением нашего сервиса, чтобы
            вам было удобнее находить и покупать авто. Добавлена возможность
            посмотреть только проданные авто по заданным параметрам,
            прицениться, а также исключить пригнанные.
          </p>
        </section>
        {/* Footer */}
        <footer className="text-[white] px-0 py-0 relative">
          <div className="max-w-7xl ml-auto flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="w-full grid md:grid-cols-[1fr_auto] gap-10">
              <div className="space-y-3 my-auto">
                <p>
                  <span className="font-opensans font-regular text-[12px] sm:text-[16px] text-[#746E7A]">
                    Телефон:
                  </span>{" "}
                  (050)-462-01-59
                </p>
                <p>
                  <span className="font-opensans font-regular text-[12px] sm:text-[16px] text-[#746E7A]">
                    Адрес:
                  </span>{" "}
                  Украина
                </p>
                <p>
                  <span className="font-opensans font-regular text-[12px] sm:text-[16px] text-[#746E7A]">
                    E-mail:
                  </span>{" "}
                  volna2007@meta.ua
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

              <div className="flex justify-end items-end">
                <Image
                  src="/images/05.png"
                  alt="Tesla"
                  width={800}
                  height={144}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </footer>
        <h2 className="font-inter font-bold w-full text-center text-white opacity-40 text-nowrap text-[70px] sm:text-[150px] leading-none">
          PEREKUP-PRO
        </h2>
      </div>
    </main>
  );
}
