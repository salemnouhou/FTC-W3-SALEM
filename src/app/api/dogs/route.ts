import { NextResponse } from "next/server";
import dogs from "../../../../data/dogs.json";

export async function GET() {
  return NextResponse.json(dogs);
}
