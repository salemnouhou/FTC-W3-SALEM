import { NextRequest, NextResponse } from "next/server";
import dogs from "../../../../../data/dogs.json";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<Record<string, string>> }
) {
  const { id } = await params;

  const dog = dogs.find((d) => d.id === Number(id));

  if (!dog) {
    return NextResponse.json({ message: "Dog not found" }, { status: 404 });
  }

  return NextResponse.json(dog);
}