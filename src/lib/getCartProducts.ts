import { turso } from "@/db";
import { TCartProduct, TProduct } from "@/types/product";
import { unstable_cache } from "next/cache";

export const getCartProducts = unstable_cache(
  async () => {
    return (
      await turso.execute(`
    SELECT
      p.id,
      p.name,
      p.description,
      p.price,
      p.image,
      c.quantity as cartQuantity
    FROM cart c
    JOIN products p ON p.id = c.product_id
  `)
    ).rows as unknown as TCartProduct[];
  },
  [],
  {
    tags: ["products", "cart"],
  },
);
