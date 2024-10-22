export type TProductBase = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string | null;
};

export type TProduct = TProductBase & {
  cartQuantity: number | null;
};

export type TCartProduct = TProductBase & {
  cartQuantity: number;
};

export type TCartStat = {
  total: number;
  total_price: number;
};
