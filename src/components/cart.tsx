/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/j2r08QZZlqU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { CartItem } from "./cart-item";
import InterstellarTelescope from "./products-images/Interstellar Telescope.jpeg";
import GravityBoots from "./products-images/Gravity Boots.jpeg";
import InterplanetaryCommunicator from "./products-images/Interplanetary Communicator.jpeg";

const products = [
  {
    alt: "Product 1",
    imageSrc: InterstellarTelescope,
    title: "Interstellar Telescope",
    description: "Explore the cosmos from the comfort of your home planet.",
    price: "$999.99",
    quantity: 1,
  },
  {
    alt: "Product 2",
    imageSrc: GravityBoots,
    title: "Gravity Boots",
    description: "Walk on any planet with ease.",
    price: "$149.99",
    quantity: 1,
  },
  {
    alt: "Product 3",
    imageSrc: InterplanetaryCommunicator,
    title: "Interplanetary Communicator",
    description: "Stay connected with loved ones across the galaxy.",
    price: "$299.99",
    quantity: 1,
  },
];

const Cart = () => {
  return (
    <main className="flex-1 py-12 px-6">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Cart</h2>
        <div className="bg-[#1e293b] rounded-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <CartItem
                key={index}
                alt={product.alt}
                imageSrc={product.imageSrc}
                title={product.title}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-2xl font-bold">Total: $1,449.97</p>
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
