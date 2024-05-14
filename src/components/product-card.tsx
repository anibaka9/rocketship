import Image, { StaticImageData } from "next/image";

type ProductCardProps = {
  alt: string;
  imageSrc: StaticImageData;
  title: string;
  description: string;
  price: string;
};

const ProductCard = ({
  alt,
  imageSrc,
  title,
  description,
  price,
}: ProductCardProps) => {
  return (
    <div className="bg-[#1e293b] rounded-lg overflow-hidden flex flex-col">
      <Image alt={alt} className="w-full h-48 object-cover" src={imageSrc} />
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">{price}</p>
          <button className="bg-[#4f46e5] text-white px-4 py-2 rounded-md hover:bg-[#4338ca]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
