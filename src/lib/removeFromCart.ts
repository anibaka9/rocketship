"use server";

import { turso } from "@/db";
import { revalidateTag } from "next/cache";

export async function removeFromCart(productId: number) {
  const quantity = (
    await turso.execute(`
    SELECT quantity FROM cart WHERE product_id =  ${productId};`)
  ).rows[0]?.quantity as number | null | undefined;

  if (!quantity || quantity < 1) {
    return;
  }
  if (quantity === 1) {
    await turso.execute(`DELETE FROM cart WHERE product_id = ${productId}`);
  } else {
    await turso.execute(
      `UPDATE cart SET quantity = ${quantity - 1} WHERE product_id = ${productId}`,
    );
  }
  revalidateTag("products");
  revalidateTag("cart");
}
