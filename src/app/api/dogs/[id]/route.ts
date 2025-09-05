import { NextResponse } from "next/server";
import dogs from "../../../../../data/dogs.json";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
  ) {
    const dog = dogs.find((d) => d.id === Number(params.id));
  
    if (!dog) {
      return NextResponse.json({ message: "Dog not found" }, { status: 404 });
    }
  
    return NextResponse.json(dog);
  }
  
