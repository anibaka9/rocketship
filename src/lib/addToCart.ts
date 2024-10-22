"use server";

import { turso } from "@/db";
import { revalidateTag } from "next/cache";

export async function addToCart(productId: number) {
  const quantity = (
    await turso.execute(`
    SELECT quantity FROM cart WHERE product_id =  ${productId};`)
  ).rows[0]?.quantity as number | null | undefined;

  if (quantity === null || quantity === undefined) {
    await turso.execute(
      `INSERT INTO cart (product_id, quantity) VALUES (${productId}, 1)`,
    );
  } else {
    await turso.execute(
      `UPDATE cart SET quantity = ${quantity + 1} WHERE product_id = ${productId}`,
    );
  }
  revalidateTag("products");
  revalidateTag("cart");
}
