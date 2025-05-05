"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/app/components/Header";

export default function RegistrationPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(true);

  const handleRegister = () => {
    if (agreed) {
      router.push("/pricing");
    }
  };

  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 1), rgba(109, 1, 21, 1)), url(/images/bg.png)",
      }}
    >
      <Header />

      {/* Фоновое изображение */}
      <div className="absolute inset-0 hidden sm:flex justify-end items-center z-0 pointer-events-none">
        <Image
          src="/images/01-1.png"
          alt="car"
          width={500}
          height={300}
          className="max-w-full h-auto object-contain"
        />
      </div>

      {/* Контент */}
      <div className="relative z-10 min-h-screen max-w-4xl w-full mx-auto gap-8 items-center pt-20 px-4 sm:px-0">
        <p className="font-['Monrope'] font-bold text-base sm:text-xl mb-10 text-center">
          После регистрации, вам будет доступно 1 день бесплатного пользования.
          За это время вы можете приобрести авто по наиболее выгодным ценам в
          Украине.
        </p>

        <div className="space-y-6">
          {/* Блок: У меня есть аккаунт */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 items-end">
            <p className="font-['Inter'] font-bold text-lg sm:text-xl">
              У меня есть аккаунт
            </p>

            <div>
              <label className="font-['Inter'] font-medium text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mt-1 rounded bg-white text-[#999999] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-['Inter'] font-medium text-sm sm:text-base">
                  Пароль
                </label>
                <div className="font-['Inter'] font-light text-sm text-gray-300 cursor-pointer">
                  Напомнить пароль
                </div>
              </div>
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded bg-white text-[#999999] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>

          {/* Чекбокс соглашения */}
          <div className="flex items-start gap-2 mb-6">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-4 w-4 mt-1 text-red-600"
            />
            <p className="font-['Inter'] font-medium text-sm sm:text-base leading-snug">
              Отправляя форму, я соглашаюсь с <br />
              <span className="font-semibold">
                политикой обработки персональных данных
              </span>
            </p>
          </div>

          {/* Блок: Создать аккаунт */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
            <p className="font-['Inter'] font-bold mb-2 text-lg sm:text-xl">
              Создать аккаунт
            </p>

            <div>
              <label className="font-['Inter'] font-medium text-sm sm:text-base">
                Телефон
              </label>
              <input
                type="tel"
                placeholder="+380"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 mt-1 rounded bg-white text-[#999999] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <button
              className="font-['Inter'] font-bold w-full sm:w-auto bg-[#9D0D14] hover:bg-red-700 text-white px-6 py-2 rounded-[20px] mt-4 sm:mt-0"
              onClick={handleRegister}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
