import { NextRequest,NextResponse } from "next/server";
import products from "../../../../../data/products.json";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {

  const { id } = context.params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
