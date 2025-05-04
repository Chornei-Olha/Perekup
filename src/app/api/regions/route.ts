import { NextResponse } from "next/server";

// Массив регионов
const regions = [
  { id: 10, name: "Київська" },
  { id: 11, name: "Харківська" },
  { id: 15, name: "Полтавська" },
];

export async function GET() {
  return NextResponse.json(regions);
}
