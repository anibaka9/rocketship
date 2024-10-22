import Image from "next/image";
import placeholderImage from "@/components/products-images/Interplanetary Communicator.jpeg";
import { AddToCart } from "./add-to-cart";
import { ChangeQuantity } from "./change-quantity";

type ProductCardProps = {
  id: number;
  image: string | null;
  name: string;
  description: string;
  price: number;
  priority?: boolean;
  cartQuantity: number | null;
};

const ProductCard = ({
  id,
  image,
  name,
  description,
  price,
  priority,
  cartQuantity,
}: ProductCardProps) => {
  return (
    <div className="bg-[#1e293b] rounded-lg overflow-hidden flex flex-col">
      <Image
        alt={name}
        className="w-full h-48 object-cover"
        src={image ?? placeholderImage}
        priority={priority}
        width={512}
        height={512}
      />
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">{price}</p>
          {cartQuantity ? (
            <ChangeQuantity cartQuantity={cartQuantity} id={id} />
          ) : (
            <AddToCart id={id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
