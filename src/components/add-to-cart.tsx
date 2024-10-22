"use client";

import { addToCart } from "@/lib/addToCart";

type AddToCartProps = {
  id: number;
};

export function AddToCart({ id }: AddToCartProps) {
  return (
    <button
      onClick={() => addToCart(id)}
      className="bg-[#4f46e5] text-white px-4 py-2 rounded-md hover:bg-[#4338ca]"
    >
      Add to Cart
    </button>
  );
}
