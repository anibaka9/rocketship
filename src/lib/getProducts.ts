import { turso } from "@/db";
import { TProduct } from "@/types/product";
import { unstable_cache } from "next/cache";

export const getProducts = unstable_cache(
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
    FROM products p
    LEFT JOIN cart c ON p.id = c.product_id
  `)
    ).rows as unknown as TProduct[];
  },
  [],
  {
    tags: ["products", "cart"],
  },
);
