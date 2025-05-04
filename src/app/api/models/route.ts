// app/api/models/route.ts

import { NextRequest, NextResponse } from "next/server";

// Массив моделей с привязкой к брендам
const models = [
  { id: 33, name: "Astra", brandId: 210 },
  { id: 34, name: "Mokka", brandId: 210 },
  { id: 35, name: "Zafira", brandId: 210 },
  { id: 36, name: "CX-5", brandId: 212 },
  { id: 37, name: "3", brandId: 212 },
  { id: 38, name: "CR-V", brandId: 240 },
];

export async function POST(req: NextRequest) {
  try {
    const { brands } = await req.json();

    if (!Array.isArray(brands)) {
      return NextResponse.json(
        { error: "Некорректный формат данных: ожидался массив." },
        { status: 400 }
      );
    }

    const filteredModels = models.filter((model) =>
      brands.includes(model.brandId)
    );

    return NextResponse.json(filteredModels);
  } catch (err) {
    console.error("Ошибка при получении моделей:", err);
    return NextResponse.json(
      { error: "Произошла ошибка при получении моделей." },
      { status: 500 }
    );
  }
}
