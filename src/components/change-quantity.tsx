"use client";

type ChangeQuantityProps = {
  cartQuantity: number;
  handleAddToCartAction: () => Promise<void>;
  handleRemoveFromCartAction: () => Promise<void>;
};

export function ChangeQuantity({
  cartQuantity,
  handleAddToCartAction,
  handleRemoveFromCartAction,
}: ChangeQuantityProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        disabled={cartQuantity === 0}
        className="bg-[#4f46e5] text-white px-2 py-2 rounded-md hover:bg-[#4338ca] disabled:bg-gray-400 disabled:cursor-not-allowed"
        onClick={handleRemoveFromCartAction}
      >
        -
      </button>
      <span>{cartQuantity}</span>
      <button
        className="bg-[#4f46e5] text-white px-2 py-2 rounded-md hover:bg-[#4338ca]"
        onClick={handleAddToCartAction}
      >
        +
      </button>
    </div>
  );
}
