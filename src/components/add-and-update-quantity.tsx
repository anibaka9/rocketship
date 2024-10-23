"use client";

import { addToCart } from "@/lib/addToCart";
import { removeFromCart } from "@/lib/removeFromCart";
import { useOptimistic, startTransition } from "react";
import { ChangeQuantity } from "./change-quantity";
import { AddToCart } from "./add-to-cart";
import { useOptimisticQuantity } from "@/hooks/useOptimisticQuantity";

type AddAndUpdateQuantityProps = {
  cartQuantity: number | null;
  id: number;
};

export function AddAndUpdateQuantity({
  cartQuantity,
  id,
}: AddAndUpdateQuantityProps) {
  const { optimisticQuantity, handleAddToCart, handleRemoveFromCart } =
    useOptimisticQuantity({ cartQuantity, id });

  return (
    <>
      {optimisticQuantity ? (
        <ChangeQuantity
          cartQuantity={optimisticQuantity}
          handleAddToCartAction={handleAddToCart}
          handleRemoveFromCartAction={handleRemoveFromCart}
        />
      ) : (
        <AddToCart handleAddToCartAction={handleAddToCart} />
      )}
    </>
  );
}
