"use server";

import { turso } from "@/db";
import { revalidateTag } from "next/cache";

export async function addToCart(productId: number) {
  await turso.execute(`
      INSERT INTO cart (product_id, quantity)
      VALUES (${productId}, 1)
      ON CONFLICT (product_id) DO UPDATE
      SET quantity = cart.quantity + 1
    `);
  revalidateTag("products");
  revalidateTag("cart");
}
