import { NextRequest, NextResponse } from "next/server";
import dogs from "../../../../../data/dogs.json";

// ✅ Corrigé : params doit être dans le context
export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  const dog = dogs.find((d) => d.id === Number(id));

  if (!dog) {
    return NextResponse.json({ message: "Dog not found" }, { status: 404 });
  }

  return NextResponse.json(dog);
}
