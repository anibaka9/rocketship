"use client";

import { addToCart } from "@/lib/addToCart";
import { removeFromCart } from "@/lib/removeFromCart";

type ChangeQuantityProps = {
  cartQuantity: number;
  id: number;
};

export function ChangeQuantity({ cartQuantity, id }: ChangeQuantityProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        className="bg-[#4f46e5] text-white px-2 py-1 rounded-md hover:bg-[#4338ca]"
        onClick={() => removeFromCart(id)}
      >
        -
      </button>
      <span>{cartQuantity}</span>
      <button
        className="bg-[#4f46e5] text-white px-2 py-1 rounded-md hover:bg-[#4338ca]"
        onClick={() => addToCart(id)}
      >
        +
      </button>
    </div>
  );
}
