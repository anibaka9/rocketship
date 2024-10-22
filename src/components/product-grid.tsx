import ProductCard from "./product-card";
import { getProducts } from "@/lib/getProducts";

type TProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string | null;
  cartQuantity: number | null;
};

const ProductsGrid = async () => {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
          priority={index === 0}
          cartQuantity={product.cartQuantity}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
