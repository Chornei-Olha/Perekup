// app/api/brands/route.ts

import { NextResponse } from "next/server";

// Массив брендов
const brands = [
  { id: 210, name: "Opel" },
  { id: 212, name: "Mazda" },
  { id: 240, name: "Honda" },
];

export async function GET() {
  return NextResponse.json(brands);
}
