"use client";

import { addToCart } from "@/lib/addToCart";

type AddToCartProps = {
  handleAddToCartAction: () => Promise<void>;
};

export function AddToCart({ handleAddToCartAction }: AddToCartProps) {
  return (
    <button
      onClick={handleAddToCartAction}
      className="bg-[#4f46e5] text-white px-4 py-2 rounded-md hover:bg-[#4338ca]"
    >
      Add to Cart
    </button>
  );
}
