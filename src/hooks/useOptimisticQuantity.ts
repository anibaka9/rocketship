import { addToCart } from "@/lib/addToCart";
import { removeFromCart } from "@/lib/removeFromCart";
import { startTransition, useOptimistic } from "react";

type useOptimisticQuantityProps = {
  cartQuantity: number | null;
  id: number;
};

export function useOptimisticQuantity({
  cartQuantity,
  id,
}: useOptimisticQuantityProps) {
  const [optimisticQuantity, updateOptimisticQuantity] = useOptimistic(
    cartQuantity ?? 0,
    (state, action: "increment" | "decrement") =>
      action === "increment" ? state + 1 : Math.max(0, state - 1),
  );

  const handleAddToCart = async () => {
    startTransition(() => {
      updateOptimisticQuantity("increment");
    });
    await addToCart(id);
  };

  const handleRemoveFromCart = async () => {
    startTransition(() => {
      updateOptimisticQuantity("decrement");
    });
    await removeFromCart(id);
  };

  return {
    optimisticQuantity,
    handleAddToCart,
    handleRemoveFromCart,
  };
}
