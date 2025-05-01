import type { NextApiRequest, NextApiResponse } from "next";

// Тип модели
interface Model {
  id: number;
  name: string;
}

// Тип, где ключ — ID бренда
const models: Record<number, Model[]> = {
  210: [
    { id: 33, name: "Astra" },
    { id: 34, name: "Mokka" },
    { id: 35, name: "Zafira" },
  ],
  212: [
    { id: 40, name: "CX-5" },
    { id: 41, name: "Mazda 3" },
    { id: 42, name: "Mazda 6" },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { brands } = req.body;

    if (!Array.isArray(brands)) {
      return res.status(400).json({ message: "Brands must be an array" });
    }

    // Собираем все модели по заданным brandId
    const selectedModels: Model[] = brands.flatMap((brandId: number) => {
      return models[brandId] || [];
    });

    return res.status(200).json(selectedModels);
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
