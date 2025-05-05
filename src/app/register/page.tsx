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
      // Логика регистрации
      router.push("/pricing");
    }
  };

  return (
    <section
      className="relative bg-cover bg-center text-white "
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 1), rgba(109, 1, 21, 1)), url(/images/bg.png)",
      }}
    >
      <Header />
      <div className="min-h-screen max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8 items-center pt-5 px-4">
        <div>
          <p className="text-lg sm:text-xl font-semibold mb-10">
            После регистрации, вам будет доступно 1 день бесплатного
            пользования. За это время вы можете приобрести авто по наиболее
            выгодным ценам в Украине.
          </p>

          <div className="mb-4 text-lg sm:text-xl font-medium">
            У меня есть аккаунт
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm sm:text-base">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mt-1 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <label className="text-sm sm:text-base">Пароль</label>
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mt-1 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <div className="text-sm text-right text-gray-300 mt-1">
                Напомнить пароль
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 mb-4">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-4 w-4 text-red-600"
            />
            <p className="text-sm sm:text-base">
              Отправляя форму, я соглашаюсь с <br />
              <span className="underline">
                политикой обработки персональных данных
              </span>
            </p>
          </div>

          <div className="mb-2 text-lg sm:text-xl font-medium">
            Создать аккаунт
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <div>
              <label className="text-sm sm:text-base">Телефон</label>
              <input
                type="tel"
                placeholder="+380"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 mt-1 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <button
              className="w-full sm:w-auto bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded mt-4 sm:mt-0"
              onClick={handleRegister}
            >
              Регистрация
            </button>
          </div>
        </div>

        <div className="flex justify-center sm:justify-end mt-8 sm:mt-0">
          <Image
            src="/images/01-1.png"
            alt="car"
            width={500}
            height={300}
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
