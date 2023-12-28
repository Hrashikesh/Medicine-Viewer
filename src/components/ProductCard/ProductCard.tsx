import Image from "next/image";
import { Product } from "@schema/index";

type Props = {
  product: Product
};

export const ProductCard = ({ product }: Props) => {
  return (
    <div
      key={product?.id}
      className="bg-white shadow-md border border-gray-200 rounded-lg max-w-[14.5rem] dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <Image width={232} height={232} className="rounded-t-lg" src={product?.image} alt="Product" />
      </a>
      <div className="p-5">
        <a href="#">
          <h6 className="text-gray-900 font-bold text-xl tracking-tight mb-2 dark:text-white">
            {product?.name}
          </h6>
        </a>
        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
          {product?.description}
        </p>
      </div>
    </div>
  );
};
