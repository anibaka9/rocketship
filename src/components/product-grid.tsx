import ProductCard from "./product-card";
import InterstellarTelescope from "./products-images/Interstellar Telescope.jpeg";
import GravityBoots from "./products-images/Gravity Boots.jpeg";
import InterplanetaryCommunicator from "./products-images/Interplanetary Communicator.jpeg";
import InterstellarSurvivalKit from "./products-images/Interstellar Survival Kit.jpeg";

const products = [
  {
    alt: "Product 1",
    imageSrc: InterstellarTelescope,
    title: "Interstellar Telescope",
    description: "Explore the cosmos from the comfort of your home planet.",
    price: "$999.99",
  },
  {
    alt: "Product 2",
    imageSrc: GravityBoots,
    title: "Gravity Boots",
    description: "Walk on any planet with ease.",
    price: "$149.99",
  },
  {
    alt: "Product 3",
    imageSrc: InterplanetaryCommunicator,
    title: "Interplanetary Communicator",
    description: "Stay connected with loved ones across the galaxy.",
    price: "$299.99",
  },
  {
    alt: "Product 4",
    imageSrc: InterstellarSurvivalKit,
    title: "Interstellar Survival Kit",
    description: "Everything you need to thrive on any planet.",
    price: "$499.99",
  },
];

const ProductsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          alt={product.alt}
          imageSrc={product.imageSrc}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
