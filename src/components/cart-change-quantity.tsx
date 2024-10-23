"use client";

import { useOptimisticQuantity } from "@/hooks/useOptimisticQuantity";
import { ChangeQuantity } from "./change-quantity";

type CartChangeQuantityProps = {
  id: number;
  cartQuantity: number | null;
};

export function CartChangeQuantity({
  id,
  cartQuantity,
}: CartChangeQuantityProps) {
  const { optimisticQuantity, handleAddToCart, handleRemoveFromCart } =
    useOptimisticQuantity({ id, cartQuantity });
  return (
    <ChangeQuantity
      cartQuantity={optimisticQuantity}
      handleAddToCartAction={handleAddToCart}
      handleRemoveFromCartAction={handleRemoveFromCart}
    />
  );
}
