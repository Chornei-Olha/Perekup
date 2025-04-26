"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
// import clsx from "clsx";

const slides = [
  {
    id: 1,
    title: "BMW X2, 2021",
    img: "/bmw.png",
    info: "2.3 л/бензин • 317 л.с.",
  },
  {
    id: 2,
    title: "Kia Sportage, 2022",
    img: "/kia.png",
    info: "2.3 л/бензин • 317 л.с.",
  },
  {
    id: 3,
    title: "Lexus IS, 2018",
    img: "/lexus.png",
    info: "2.3 л/бензин • 317 л.с.",
  },
  {
    id: 4,
    title: "Audi A4, 2020",
    img: "/audi.png",
    info: "2.0 л/дизель • 190 л.с.",
  },
  {
    id: 5,
    title: "Toyota Camry, 2019",
    img: "/camry.png",
    info: "2.5 л/бензин • 203 л.с.",
  },
];

export default function TopSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="bg-gradient-to-br from-black to-red-900 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl font-bold mb-6">ТОП 50</h2>

        <div className="overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-500">
            {slides.slice(current, current + 3).map((slide, index) => (
              <div
                key={slide.id}
                className="bg-white rounded-3xl p-4 flex flex-col items-center shadow-xl relative"
              >
                <span className="absolute top-2 right-2 bg-[#9f1b1b] text-white text-xs px-2 py-0.5 rounded">
                  топ
                </span>
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={240}
                  height={140}
                  className="object-contain"
                />
                <h3 className="font-semibold text-center mt-4">
                  {slide.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{slide.info}</p>
                <button className="bg-[#1a1a1a] text-white text-sm py-1 px-4 rounded mb-2">
                  Подробнее
                </button>
                <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center">
                  ⚡
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prev}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={next}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
