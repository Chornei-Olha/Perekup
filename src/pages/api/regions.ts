import type { NextApiRequest, NextApiResponse } from "next";

const regions = [
  { id: 10, name: "Київська" },
  { id: 11, name: "Харківська" },
  { id: 15, name: "Полтавська" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(regions);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
