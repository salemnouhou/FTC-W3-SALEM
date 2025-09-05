import { NextResponse } from "next/server";
import products from "../../../../../data/products.json";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
