import Image from "next/image";
import placeholderImage from "@/components/products-images/Interplanetary Communicator.jpeg";
import { ChangeQuantity } from "./change-quantity";

type CartItemProps = {
  id: number;
  image: string | null;
  name: string;
  description: string;
  price: number;
  cartQuantity: number;
};

export const CartItem = ({
  id,
  image,
  name,
  description,
  price,
  cartQuantity,
}: CartItemProps) => {
  return (
    <div className="bg-[#1e293b] rounded-lg overflow-hidden">
      <Image
        alt={name}
        className="w-full h-48 object-cover"
        height={512}
        width={512}
        src={image ?? placeholderImage}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">{price}</p>
          <ChangeQuantity cartQuantity={cartQuantity} id={id} />
        </div>
      </div>
    </div>
  );
};
