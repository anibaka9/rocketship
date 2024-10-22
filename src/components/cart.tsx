import { getCartProducts } from "@/lib/getCartProducts";
import { CartItem } from "./cart-item";
import { getCartStat } from "@/lib/getCartStat";

const Cart = async () => {
  const [products, stat] = await Promise.all([
    getCartProducts(),
    getCartStat(),
  ]);

  return (
    <main className="flex-1 py-12 px-6">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Cart</h2>
        <div className="bg-[#1e293b] rounded-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <CartItem
                id={product.id}
                key={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
                cartQuantity={product.cartQuantity}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-2xl font-bold">Total: ${stat.total_price}</p>
            <button className="bg-[#4f46e5] text-white px-4 py-2 rounded-md hover:bg-[#4338ca]">
              Checkout
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
