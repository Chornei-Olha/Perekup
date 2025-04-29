import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
export default function Home() {
  // Features data
  const features = [
    {
      icon: "./images/vector.svg",
      title: "Все объявления со всех автомобильных порталов Украины",
      description:
        "собираются в одном месте. Система определяет кто перекупщик, а кто хозяин по количеству размещенных автомобилей с номера телефона за последние 4 года",
    },
    {
      icon: "./images/vector2.svg",
      title: "Программа рассчитывает рыночную цену для каждого",
      description: "автомобиля среди аналогичных авто в нашей базе",
    },
    {
      icon: "./images/vector3.svg",
      title: "Черный список в который входят: объявления от лизинга,",
      description: "рассрочки, и просто фейковых объявлений",
    },
    {
      icon: "./images/vector4.svg",
      title: "Фильтр от перекупщиков : при желании можно убрать",
      description:
        "объявления от перекупщиков и площадок, а так же исключить пригнанные авто",
    },
  ];

  // Additional features data
  const additionalFeatures = [
    {
      icon: "./images/vector.svg",
      title: "Система непрерывно следит за изменением цены в",
      description:
        "объявлениях : если в старом объявлении изменится цена в меньшую сторону без повторной публикации и попадет под ваш фильтр вы получите уведомление",
    },
    {
      icon: "./images/vector2.svg",
      title: "Мгновенное оповещение о новых автомобилях на смартфон , по",
      description:
        "заданным параметрам ( марка, модель, год, разница от рыночной цены)",
    },
    {
      icon: "./images/vector3.svg",
      title: "Вам нужно только сделать выборку марок, моделей которые вам",
      description:
        "интересны, и отклонение от рыночной цены и получать уведомления по этому фильтру",
    },
    {
      icon: "./images/vector4.svg",
      title: "В среднем пару минут проходит от публикации на автосайтах до",
      description: "попадения в наш автопортал и Ваш смартфон",
    },
  ];

  // Service benefits data
  const serviceBenefits = [
    {
      title: "ПЕРЕКУПЩИКАМ",
      description:
        "Первым получай предложения по цене ниже рыночной в твоем регионе. Первым Узнавай об изменении цены на актуальные для тебя объявления. Отсеивай объявления от перекупов.Сможешь видеть машины с ценой ниже рыночной со всех автосайтов Украины. Уведомления в телеграм .",
    },
    {
      title: "ПЛОЩАДКАМ ПО ПОДБОРУ АВТОМОБИЛЕЙ",
      description:
        "Собранны все актуальные объявления.Экономия времени и персонала на поиск авто. Продуманный интерфейс. Удобная система оповещения о новых предложениях или изменениях цены на телеграм",
    },
    {
      title: "ТЕМ КТО ИЩЕТ ХОРОШИЙ АВТО",
      description:
        "Фильтр от перекупщиков и площадок Видишь сколько реально времени авто в продаже и как менялась цена. Если на сайте нет подходящего авто, активируйте уведомления в телеграм и получайте самые свежие объявления занимаясь своими делами",
    },
  ];

  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="relative bg-[#691A1A]"
        style={{
          backgroundImage: "url(/images/bg-desktop.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <section
          className="relative bg-cover bg-center text-white pt-5 pb-20 px-4"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/images/bg.png)",
          }}
        >
          {/* Header content */}
          <div className="relative z-20 container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex flex-col">
                <h1 className="text-5xl font-bold text-white">PEREKUP-PRO</h1>
                <p className="text-sm text-gray-400">
                  Сервис для профессионалов автобизнеса
                </p>
              </div>

              {/* Contact info */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-white">Украина</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span className="text-white">pekekuppro7@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="text-white">+38(050) 044-11-32</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h1 className="font-plusjakarta text-3xl sm:text-5xl font-bold tracking-wide leading-tight">
              ЛУЧШИЙ ИНСТРУМЕНТ ДЛЯ ПОИСКА
              <br />
              АВТОМОБИЛЕЙ НИЖЕ РЫНОЧНОЙ ЦЕНЫ
            </h1>
            <p className="font-plusjakarta mt-8 text-xl sm:text-2xl font-light max-w-4xl mx-auto">
              Только у нас Вы получите актуальные предложения от
              <br />
              владельцев по всей Украине, со всех интернет ресурсов по
              интересным ценам
            </p>
            <button className="font-plusjakarta font-bold text-[20px] sm:text-[39px] bg-[#9D0D14] hover:bg-red-700 transition px-7 py-3 mt-12 rounded-[20px] text-white">
              ВХОД НА ПОРТАЛ
            </button>

            <p className="font-plusjakarta font-medium mt-6 text-base pt-5">
              Самый удобный сервис. Все сайты в одном кабинете AutoRia, OLX,
              RST, Avtobazar и др.
              <br />
              <span className="font-plusjakarta font-semibold">
                Получай первым самые выгодные предложения.
              </span>
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

        {/* How It Works Section */}
        <section className=" text-white pt-5">
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
                width={600}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </section>
        {/* newSection */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <p className="text-[50px] text-center text-white">▼</p>
            <h2 className="font-manrope text-5xl font-bold text-center uppercase tracking-wider mb-16 text-white">
              КАК ЭТО РАБОТАЕТ
            </h2>

            {/* Red blur effect */}
            <div className="absolute w-[1000px] h-[1000px] rounded-full blur-[240px] opacity-20 -left-1/4 top-1/4 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-10">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#851010] to-[#1F0404] flex items-center justify-center">
                        <Image
                          src={feature.icon}
                          alt=""
                          width={200}
                          height={100}
                          className="w-8 h-8"
                        />
                      </div>
                    </div>
                    <div className="text-white">
                      <h3 className="text-2xl font-semibold mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-base">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative">
                <Image
                  src="/images/03.png"
                  alt="Red car on the street"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
                {/* <div className="absolute -bottom-8 -right-8 text-sm text-red-500">
                  Все авто в одном месте
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* Additional features section */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            {/* Red blur effect */}
            <div className="absolute w-[1000px] h-[1000px] rounded-full blur-[240px] opacity-20 -right-1/4 top-1/4 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="relative order-2 md:order-1">
                <div className="relative h-[538px] w-[535px] bg-white rounded-3xl p-3 shadow-[0px_4px_22.8px_20px_rgba(255,1,1,0.25)]">
                  <div>
                    <div className="flex space-x-2 mb-6">
                      <div className="w-15 h-15 rounded-full bg-gradient-to-b from-red-600 to-gray-900 flex items-center justify-center">
                        {" "}
                        <Image
                          src="/images/vector5.svg"
                          alt=""
                          width={200}
                          height={100}
                          className="w-8 h-8"
                        />
                      </div>
                      <div className="w-15 h-15 rounded-full bg-gradient-to-b from-red-600 to-black flex items-center justify-center">
                        {" "}
                        <Image
                          src="/images/vector6.svg"
                          alt=""
                          width={200}
                          height={100}
                          className="w-8 h-8"
                        />
                      </div>
                      <div className="w-15 h-15 rounded-full bg-gradient-to-b from-red-600 to-gray-800 flex items-center justify-center">
                        {" "}
                        <Image
                          src="/images/vector7.svg"
                          alt=""
                          width={200}
                          height={100}
                          className="w-8 h-8"
                        />
                      </div>
                    </div>
                    <p className="#821810 text-2xl font-bold text-center mt-4">
                      Устал сутками сидеть на разных сайтах поисках интересных
                      вариантов, наш сервис кардинально изменит твой доход!
                    </p>
                  </div>
                </div>
                <Image
                  src="/images/04.png"
                  alt="Car"
                  width={700}
                  height={100}
                  className="absolute max-w-[819px] h-auto mt-8 bottom-[40px] right-[-40px]"
                />
              </div>

              <div className="space-y-8 order-1 md:order-2">
                {additionalFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-10">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#851010] to-[#1F0404] flex items-center justify-center">
                        <Image
                          src={feature.icon}
                          alt=""
                          width={200}
                          height={100}
                          className="w-8 h-8"
                        />
                      </div>
                    </div>
                    <div className="text-white">
                      <h3 className="text-2xl font-semibold mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-base">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Client statistics */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <div className="flex space-x-2">
                <div className="bg-white text-black h-12 w-12 rounded-full flex items-center justify-center p-0">
                  <Image
                    src="/images/ML1.svg"
                    alt=""
                    width={200}
                    height={100}
                    className="w-12 h-12"
                  />{" "}
                </div>
                <div className="bg-white text-black h-12 w-12 rounded-full flex items-center justify-center p-0">
                  <Image
                    src="/images/ML2.svg"
                    alt=""
                    width={200}
                    height={100}
                    className="w-12 h-12"
                  />{" "}
                </div>
                <div className="bg-white text-black h-12 w-12 rounded-full flex items-center justify-center p-0">
                  <Image
                    src="/images/ML3.svg"
                    alt=""
                    width={200}
                    height={100}
                    className="w-12 h-12"
                  />{" "}
                </div>
                <div className="bg-white text-black h-12 w-12 rounded-full flex items-center justify-center p-0">
                  <Image
                    src="/images/ML4.svg"
                    alt=""
                    width={200}
                    height={100}
                    className="w-12 h-12"
                  />{" "}
                </div>
              </div>
              <div className="ml-6">
                <p className="text-xl font-bold text-white">34,000+</p>
                <p className="font-light text-white">Довольных клиентов</p>
              </div>
            </div>
          </div>
        </section>
        {/* Service benefits section */}
        <section className="py-16 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center uppercase tracking-wider mb-16">
              НАШ СЕРВИС БУДЕТ ПОЛЕЗЕН
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceBenefits.map((benefit, index) => (
                <div key={index} className="bg-transparent border-none">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-center mb-6">
                      {benefit.title}
                    </h3>
                    <p className="text-sm flex-grow mb-6">
                      {benefit.description}
                    </p>
                    <div className="bg-white font-bold text-red-800 hover:bg-gray-100 rounded-full self-center px-8 py-3">
                      ПОПРОБОВАТЬ БЕСПЛАТНО
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Registration info */}
        <section className="py-12 text-white">
          <div className="container mx-auto text-center">
            <p className="text-base mb-2">
              Для того что бы увидеть все возможности нашего сервиса вам нужно
              зарегистрироваться, и указать тот номер телефона на котором
              установлен телеграм. Что бы получать
            </p>
            <p className="text-base mb-4">
              уведомления о новых авто. После чего вам будет доступно день
              <span className="text-red-500"> бесплатного</span> пользования.
            </p>

            <p className="text-base font-semibold my-6">
              ПОВТОРНАЯ РЕГИСТРАЦИЯ НЕ ДОПУСКАЕТСЯ
            </p>

            <p className="text-base mb-2">
              Наша команда постоянно работает над улучшением нашего сервиса, для
              того что вам было удобнее находить и покупать авто. Добавлена
              возможность посмотреть только
            </p>
            <p className="text-base">
              проданные авто по заданым параметрам, для того что бы прицениться,
              а так же исключить пригнаные
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-[white] px-0 py-0 relative">
          <div className="max-w-7xl ml-auto flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="w-full grid md:grid-cols-[1fr_auto] gap-10">
              <div className="space-y-3 my-auto">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-gray-500 w-20">Телефон</span>
                    <span className="text-white/75">+38(050)0441132</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-500 w-20">Адрес</span>
                    <span className="text-white/75">Украина</span>
                  </div>
                  <div className="flex items-center mb-8">
                    <span className="text-gray-500 w-20">E-mail</span>
                    <span className="text-white/75">pekekuppro7@gmail.com</span>
                  </div>
                </div>
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
        <div className="text-white/40 text-[200px] font-bold text-center">
          PEREKUP-PRO
        </div>
      </div>
    </main>
  );
}
