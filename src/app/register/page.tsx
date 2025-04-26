export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#300000] to-black text-white px-4 py-10 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full relative">
        <div className="absolute top-4 right-4 text-sm text-gray-300">
          volna2007@meta.ua
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-6">PEREKUP-PRO</h1>
        <p className="text-sm text-gray-300 mb-10">
          Сервис для профессионалов автобизнеса
        </p>

        <p className="text-lg md:text-xl font-medium max-w-2xl mb-12">
          После регистрации, вам будет доступно 1 день бесплатного пользования.
          За это время вы можете приобрести авто по наиболее выгодным ценам в
          Украине.
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-2">Пароль</label>
              <input
                type="password"
                placeholder="Пароль"
                className="w-full px-4 py-2 rounded bg-white text-black"
              />
              <div className="text-sm text-gray-300 mt-1">Напомнить пароль</div>
            </div>
            <div className="col-span-2 mt-4 flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm text-gray-300">
                Отправляя форму, я соглашаюсь <br />с{" "}
                <span className="underline">
                  политикой обработки персональных данных
                </span>
              </p>
            </div>
            <div className="col-span-2 mt-6">
              <label className="block mb-2">Телефон</label>
              <input
                type="tel"
                placeholder="+380"
                className="w-full px-4 py-2 rounded bg-white text-black"
              />
            </div>
            <div className="col-span-2 mt-4">
              <button className="w-full bg-red-700 hover:bg-red-800 transition px-6 py-3 rounded text-white font-semibold">
                Регистрация
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="/images/01-1.png"
              alt="Car"
              className="object-contain w-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
