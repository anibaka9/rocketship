import { turso } from "@/db";
import { TCartStat } from "@/types/product";
import { unstable_cache } from "next/cache";

export const getCartStat = unstable_cache(
  async () => {
    return (
      await turso.execute(`
        SELECT
              count(*) as total, round(sum(p.price * c.quantity), 2) as total_price
            FROM cart c JOIN products p ON p.id = c.product_id
  `)
    ).rows[0] as unknown as TCartStat;
  },
  [],
  {
    tags: ["products", "cart"],
  },
);
