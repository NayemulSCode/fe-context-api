import type { FC } from "react";
import { useCartStore, type Product } from "../../zustand/CartStore";

type ProductCardType = {
  product: Product;
};
const ProductCard: FC<ProductCardType> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-all hover:shadow-lg">
      <div className="text-4xl mb-2 text-center">{product.emoji}</div>
      <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
        {product.name}
      </h3>
      <p className="text-green-600 dark:text-green-400 font-bold mb-3">
        ৳{product.price.toLocaleString()}
      </p>
      <button
        onClick={() => addItem(product)}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
