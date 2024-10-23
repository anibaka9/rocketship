"use server";

import { turso } from "@/db";
import { revalidateTag } from "next/cache";

export async function removeFromCart(productId: number) {
  const result = await turso.execute(`
    UPDATE cart
    SET quantity = CASE
      WHEN quantity > 1 THEN quantity - 1
      ELSE 0
    END
    WHERE product_id = ${productId}
    RETURNING quantity
  `);

  if (result.rows[0]?.quantity === 0) {
    await turso.execute(`
      DELETE FROM cart
      WHERE product_id = ${productId}
    `);
  }

  revalidateTag("products");
  revalidateTag("cart");
}
