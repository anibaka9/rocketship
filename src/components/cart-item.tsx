import Image, { StaticImageData } from "next/image";

type CartItemProps = {
  alt: string;
  imageSrc: StaticImageData;
  title: string;
  description: string;
  price: string;
  quantity: number;
};

export const CartItem = ({
  alt,
  imageSrc,
  title,
  description,
  price,
  quantity,
}: CartItemProps) => {
  return (
    <div className="bg-[#1e293b] rounded-lg overflow-hidden">
      <Image alt={alt} className="w-full h-48 object-cover" src={imageSrc} />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">{price}</p>
          <div className="flex items-center gap-2">
            <button className="bg-[#4f46e5] text-white px-2 py-1 rounded-md hover:bg-[#4338ca]">
              -
            </button>
            <span>{quantity}</span>
            <button className="bg-[#4f46e5] text-white px-2 py-1 rounded-md hover:bg-[#4338ca]">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
