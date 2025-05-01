import type { NextApiRequest, NextApiResponse } from "next";

const brands = [
  { id: 210, name: "Opel" },
  { id: 212, name: "Mazda" },
  { id: 240, name: "Honda" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(brands);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
